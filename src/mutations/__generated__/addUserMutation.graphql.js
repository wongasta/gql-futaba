/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addUserMutationVariables = {||};
export type addUserMutationResponse = {|
  +add_user: ?{|
    +id: string,
    +user_id: string,
    +created_ts: number,
    +modified_ts: number,
  |}
|};
export type addUserMutation = {|
  variables: addUserMutationVariables,
  response: addUserMutationResponse,
|};
*/


/*
mutation addUserMutation {
  add_user {
    id
    user_id
    created_ts
    modified_ts
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "add_user",
    "plural": false,
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
        "name": "user_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_ts",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "modified_ts",
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
    "name": "addUserMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "addUserMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f7d03424b4f641997e2edb3c9418dc2e",
    "id": null,
    "metadata": {},
    "name": "addUserMutation",
    "operationKind": "mutation",
    "text": "mutation addUserMutation {\n  add_user {\n    id\n    user_id\n    created_ts\n    modified_ts\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '75a83996e201f1045ab841579d19a1f0';

module.exports = node;
