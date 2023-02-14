/**
 * @generated SignedSource<<2f98fd6ff363bdcd4fbbbca8a024ce4b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RequestActiveUserQuery$variables = {};
export type RequestActiveUserQuery$data = {
  readonly whoAmI: {
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
  };
};
export type RequestActiveUserQuery = {
  response: RequestActiveUserQuery$data;
  variables: RequestActiveUserQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RequestActiveUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SafeUserDto",
        "kind": "LinkedField",
        "name": "whoAmI",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RequestActiveUserQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SafeUserDto",
        "kind": "LinkedField",
        "name": "whoAmI",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b6ce77b5b08f9a5ce444e2411e318240",
    "id": null,
    "metadata": {},
    "name": "RequestActiveUserQuery",
    "operationKind": "query",
    "text": "query RequestActiveUserQuery {\n  whoAmI {\n    email\n    firstName\n    lastName\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2a60cbb40afbf28426a74074004d1340";

export default node;
