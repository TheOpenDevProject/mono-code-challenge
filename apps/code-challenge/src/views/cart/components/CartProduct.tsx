import { Button, ButtonSize, Flex } from "@scylla-digital/design-library";
import { useCallback } from "react";
import { Advertisement, ICartAction, PricingRule } from "../hooks/useCart";
import { PlusOneRounded } from "@mui/icons-material";

interface ICartItemProps {
  product: Advertisement;

  rules: Readonly<Array<PricingRule>>;

  onClick: (action: ICartAction) => void;
}

export function CartProduct(props: ICartItemProps) {
  const { product, onClick, rules } = props;

  const addCartItem = useCallback(() => {
    onClick({
      type: "ADD_ITEM",
      payload: product,
      advertisement_type: product.name,
      rules,
    });
  }, [product]);

  return (
    <Flex
      flexGap={"1rem"}
      flexDirection={"column"}
      style={{
        border: "solid 1px #ccc",
        borderRadius: "6px",
        padding: "1rem",
        maxWidth: "24rem",
      }}
    >
      <Flex>{product.name}</Flex>
      <Flex>{product.description}</Flex>
      <Flex>{product.standardPrice}</Flex>
      <Flex justifyContent={"center"}>
        <Button
          buttonType={"primary"}
          buttonSize={ButtonSize.L}
          onClick={addCartItem}
        >
          <Flex alignItems={"center"}>
            <PlusOneRounded /> Add New
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
}
