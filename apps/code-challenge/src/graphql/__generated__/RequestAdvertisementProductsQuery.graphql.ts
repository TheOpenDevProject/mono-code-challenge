/**
 * @generated SignedSource<<539fb7feced5373bcd17b21552c40fa3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RequestAdvertisementProductsQuery$variables = {};
export type RequestAdvertisementProductsQuery$data = {
  readonly advertisements: ReadonlyArray<{
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly standardPrice: number;
  }>;
};
export type RequestAdvertisementProductsQuery = {
  response: RequestAdvertisementProductsQuery$data;
  variables: RequestAdvertisementProductsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AdvertisementDto",
    "kind": "LinkedField",
    "name": "advertisements",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "standardPrice",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RequestAdvertisementProductsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RequestAdvertisementProductsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f47cd6a4fbc7c90273390c74bf1dcc7c",
    "id": null,
    "metadata": {},
    "name": "RequestAdvertisementProductsQuery",
    "operationKind": "query",
    "text": "query RequestAdvertisementProductsQuery {\n  advertisements {\n    id\n    name\n    description\n    standardPrice\n  }\n}\n"
  }
};
})();

(node as any).hash = "a409b3c906d27415891fd8b03e547296";

export default node;
