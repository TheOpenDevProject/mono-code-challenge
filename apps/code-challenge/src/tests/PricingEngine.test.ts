import { useCart } from "../views/cart/hooks/useCart";
import { act, renderHook } from "@testing-library/react-hooks";
import { MOCK_DATA_PRODUCTS, MOCK_DATA_RULES } from "./data/mock_data";

describe("Pricing Engine Tests", function () {
  it("should calculate the total cost of items in the basket excluding free items when no discount is applied", function () {
    let { result } = renderHook(() => useCart());
    let [, dispatch] = result.current;
    act(() => {
      dispatch({
        type: "ADD_ITEM",
        rules: MOCK_DATA_RULES.filter((rule) => rule.clientId === "SecondBite"),
        payload: MOCK_DATA_PRODUCTS[0],
        advertisement_type: MOCK_DATA_PRODUCTS[0].name,
      });
    });

    expect(result.current[0].totalCost).toEqual(269.99);
  });

  it("should calculate the total cost of items in the basket including free items when a discount is applied", function () {
    let { result } = renderHook(() => useCart());
    let [, dispatch] = result.current;
    act(() => {
      dispatch({
        type: "ADD_ITEM",
        rules: MOCK_DATA_RULES.filter((rule) => rule.clientId === "MYER"),
        payload: MOCK_DATA_PRODUCTS[0],
        advertisement_type: MOCK_DATA_PRODUCTS[0].name,
      });
    });

    act(() => {
      dispatch({
        type: "ADD_ITEM",
        rules: MOCK_DATA_RULES.filter((rule) => rule.clientId === "MYER"),
        payload: MOCK_DATA_PRODUCTS[2],
        advertisement_type: MOCK_DATA_PRODUCTS[2].name,
      });
    });
    expect(result.current[0].totalCost).toEqual(659.98);
  });
});
