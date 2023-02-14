/**
 * @generated SignedSource<<6be1fec98e68c1e09caaa43aeff8f8a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ActivateUserInput = {
  password: string;
  token: string;
};
export type UpdateAccountActivationMutation$variables = {
  input: ActivateUserInput;
};
export type UpdateAccountActivationMutation$data = {
  readonly activateUser: {
    readonly email: string;
  };
};
export type UpdateAccountActivationMutation = {
  response: UpdateAccountActivationMutation$data;
  variables: UpdateAccountActivationMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateAccountActivationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SafeUserDto",
        "kind": "LinkedField",
        "name": "activateUser",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateAccountActivationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SafeUserDto",
        "kind": "LinkedField",
        "name": "activateUser",
        "plural": false,
        "selections": [
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
    "cacheID": "e7cc4cdd1046214641a41ab2241b5eef",
    "id": null,
    "metadata": {},
    "name": "UpdateAccountActivationMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateAccountActivationMutation(\n  $input: ActivateUserInput!\n) {\n  activateUser(input: $input) {\n    email\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa068ca1da7b5e8fbe43e4a372053f23";

export default node;
