/**
 * @generated SignedSource<<e43081f8debaab7ae7a15f0df3d96af4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PricingRuleInput = {
  clientId: string;
};
export type RequestAdvertisementRulesQuery$variables = {
  input: PricingRuleInput;
};
export type RequestAdvertisementRulesQuery$data = {
  readonly pricingRules: ReadonlyArray<{
    readonly alternativePrice: number;
    readonly clientId: string;
    readonly freeItemMultiple: number;
    readonly freeItemMultiplier: number;
    readonly id: string;
    readonly productId: string;
  }>;
};
export type RequestAdvertisementRulesQuery = {
  response: RequestAdvertisementRulesQuery$data;
  variables: RequestAdvertisementRulesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PricingRuleDto",
    "kind": "LinkedField",
    "name": "pricingRules",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "productId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "freeItemMultiple",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "freeItemMultiplier",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "alternativePrice",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RequestAdvertisementRulesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RequestAdvertisementRulesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0d4bb7c578901569fdaa18231c2846f1",
    "id": null,
    "metadata": {},
    "name": "RequestAdvertisementRulesQuery",
    "operationKind": "query",
    "text": "query RequestAdvertisementRulesQuery(\n  $input: PricingRuleInput!\n) {\n  pricingRules(input: $input) {\n    id\n    productId\n    clientId\n    freeItemMultiple\n    freeItemMultiplier\n    alternativePrice\n  }\n}\n"
  }
};
})();

(node as any).hash = "ecf5135279727a17c79fac5080637ad4";

export default node;
