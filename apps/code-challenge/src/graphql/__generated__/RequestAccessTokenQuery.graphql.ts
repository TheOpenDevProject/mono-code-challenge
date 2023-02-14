/**
 * @generated SignedSource<<b45aac166477ca3e1c7186e117ecab94>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AuthenticateUserInput = {
  email: string;
  password: string;
};
export type RequestAccessTokenQuery$variables = {
  input: AuthenticateUserInput;
};
export type RequestAccessTokenQuery$data = {
  readonly requestAccessToken: string;
};
export type RequestAccessTokenQuery = {
  response: RequestAccessTokenQuery$data;
  variables: RequestAccessTokenQuery$variables;
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
    "kind": "ScalarField",
    "name": "requestAccessToken",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RequestAccessTokenQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RequestAccessTokenQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7bbc1b2f5808ec68533d7abea0deba8f",
    "id": null,
    "metadata": {},
    "name": "RequestAccessTokenQuery",
    "operationKind": "query",
    "text": "query RequestAccessTokenQuery(\n  $input: AuthenticateUserInput!\n) {\n  requestAccessToken(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "b2de93b856dce13b0a4d200eb27772ce";

export default node;
