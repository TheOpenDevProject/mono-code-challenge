/**
 * @generated SignedSource<<af1e7d63066e9106dddece81ca23cb95>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ForgotPasswordMutation$variables = {
  email: string;
};
export type ForgotPasswordMutation$data = {
  readonly resetPassword: boolean;
};
export type ForgotPasswordMutation = {
  response: ForgotPasswordMutation$data;
  variables: ForgotPasswordMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      }
    ],
    "kind": "ScalarField",
    "name": "resetPassword",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ForgotPasswordMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ForgotPasswordMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "587b46cfb10d780c13c35190018693dc",
    "id": null,
    "metadata": {},
    "name": "ForgotPasswordMutation",
    "operationKind": "mutation",
    "text": "mutation ForgotPasswordMutation(\n  $email: String!\n) {\n  resetPassword(email: $email)\n}\n"
  }
};
})();

(node as any).hash = "449d461e0c704320dd4a0c07df2b4a27";

export default node;
