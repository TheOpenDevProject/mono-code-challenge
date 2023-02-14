import React, { Reducer, useEffect } from "react";

export interface Advertisement {
  readonly description: string;
  readonly id: string;
  readonly name: string;
  readonly standardPrice: number;
}

export interface PricingRule {
  readonly id: string;

  /**
   * The number of items you get for free for each multiple of items purchased
   */
  readonly freeItemMultiplier?: number;
  /**
   * The number of items that must be purchased to get the free item
   */
  readonly freeItemMultiple?: number;
  readonly productId: string;

  readonly alternativePrice?: number;
}

export interface ICartState {
  /**
   * <Item Type, Items within type>
   */
  items: Map<string, Array<Advertisement>>;

  freeItems: Map<string, Array<Advertisement>>;

  totalItems: number;

  totalCost: number;
}

export interface ICartAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "UPDATE_ITEM";
  payload?: Advertisement;

  rules: Readonly<Array<PricingRule>>;

  advertisement_type: string;
}

function calculateFreeItems(
  items: Array<Advertisement>,
  rules: Readonly<Array<PricingRule>>
): Array<Advertisement> {
  const freeItems: Array<Advertisement> = [];
  const totalCartItems = items.length;
  let totalFreeItems = 0;

  const rule = rules
    .filter((rule) => rule.freeItemMultiple && rule.freeItemMultiplier)
    .at(0);

  if (rule && rule.freeItemMultiple && rule.freeItemMultiplier) {
    totalFreeItems = Math.floor(
      (totalCartItems / rule.freeItemMultiplier) * rule.freeItemMultiple
    );
  }
  console.log(totalFreeItems);

  for (let i = 0; i < totalFreeItems; i++) {
    freeItems.push({ ...items[0], standardPrice: 0 });
  }

  return freeItems;
}

function calculateBasketTotalItems(
  items: Map<string, Array<Advertisement>>,
  freeItems: Map<string, Array<Advertisement>>
): number {
  let totalItems = 0;

  for (const [, item] of items.entries()) {
    totalItems += item.length;
  }

  for (const [key, freeItem] of freeItems.entries()) {
    totalItems += freeItem.length;
  }

  console.log(`Total Items: ${totalItems}`);

  return totalItems;
}

function calculateBasketTotalCost(
  items: Map<string, Array<Advertisement>>,
  rules: Readonly<Array<PricingRule>>
): number {
  // This is being applied twice

  let totalCost = 0;

  for (const [key, item] of items.entries()) {
    for (const advertisement of item) {
      const rule = rules
        .filter(
          (rule) =>
            rule.alternativePrice && advertisement.name === rule.productId
        )
        .at(0);
      console.log(`A Rule ${rule}`);
      totalCost +=
        rule && rule.alternativePrice
          ? rule.alternativePrice
          : advertisement.standardPrice;
    }
  }

  console.log(`Total Cost: ${totalCost}`);

  // HACK: This is a hack to ensure that the total cost is always displayed with 2 decimal places and cast to a number
  return +totalCost.toFixed(2);
}

const reducer = (state: ICartState, action: ICartAction): ICartState => {
  console.log(action.rules);
  console.log(action.advertisement_type);
  switch (action.type) {
    case "ADD_ITEM":
      if (!action.payload) {
        return state;
      }
      const items = state.items.set(action.advertisement_type, [
        ...(state.items.get(action.advertisement_type) ?? []),
        action.payload,
      ]);

      const freeItems = action.rules
        ? state.freeItems.set(
            action.advertisement_type,
            calculateFreeItems(
              state.items.get(action.advertisement_type) ?? [],
              action.rules.filter(
                (rule) => rule.productId === action.advertisement_type
              )
            )
          )
        : state.freeItems;

      return {
        ...state,
        freeItems,
        items, //Map<AdvertisementType, Advertisement[]>
        totalItems: calculateBasketTotalItems(items, freeItems),
        totalCost: calculateBasketTotalCost(items, action.rules ?? []),
      };
    case "REMOVE_ITEM":
      state.freeItems.delete(action.advertisement_type);
      state.items.delete(action.advertisement_type);

      return {
        ...state,
        totalItems: calculateBasketTotalItems(state.items, state.freeItems),
        totalCost: calculateBasketTotalCost(state.items, action.rules ?? []),
      };
    default:
      return state;
  }
};

export function useCart(): [ICartState, React.Dispatch<ICartAction>] {
  const [state, dispatch] = React.useReducer<Reducer<ICartState, ICartAction>>(
    reducer,
    {
      items: new Map(),
      freeItems: new Map(),
      totalItems: 0,
      totalCost: 0,
    }
  );

  return [state, dispatch];
}
