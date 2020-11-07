/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addCommentInput = {|
  user: string,
  post: string,
  comment_content: string,
  image_url?: ?string,
|};
export type addCommentMutationVariables = {|
  input: addCommentInput
|};
export type addCommentMutationResponse = {|
  +add_comment: ?{|
    +commentEdge: ?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +user: string,
        +user_id: string,
        +post: string,
        +comment_content: string,
        +image_url: ?string,
        +created_ts: number,
      |},
    |}
  |}
|};
export type addCommentMutation = {|
  variables: addCommentMutationVariables,
  response: addCommentMutationResponse,
|};
*/


/*
mutation addCommentMutation(
  $input: addCommentInput!
) {
  add_comment(input: $input) {
    commentEdge {
      cursor
      node {
        id
        user
        user_id
        post
        comment_content
        image_url
        created_ts
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
    "concreteType": "addCommentPayload",
    "kind": "LinkedField",
    "name": "add_comment",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CommentEdge",
        "kind": "LinkedField",
        "name": "commentEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "node",
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
                "name": "user",
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
                "name": "post",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "comment_content",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "image_url",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "created_ts",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
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
    "name": "addCommentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addCommentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6b7de13cb86f978cc998e262278463b2",
    "id": null,
    "metadata": {},
    "name": "addCommentMutation",
    "operationKind": "mutation",
    "text": "mutation addCommentMutation(\n  $input: addCommentInput!\n) {\n  add_comment(input: $input) {\n    commentEdge {\n      cursor\n      node {\n        id\n        user\n        user_id\n        post\n        comment_content\n        image_url\n        created_ts\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd9d208cfdb344f0a6616b4df957cd1af';

module.exports = node;
