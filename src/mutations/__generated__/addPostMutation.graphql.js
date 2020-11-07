/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addPostInput = {|
  user: string,
  title: string,
  post_content: string,
  image_url?: ?string,
|};
export type addPostMutationVariables = {|
  input: addPostInput
|};
export type addPostMutationResponse = {|
  +add_post: ?{|
    +postEdge: ?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +user_id: string,
        +title: string,
        +post_content: string,
        +image_url: ?string,
        +created_ts: number,
        +comments: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +cursor: string,
            +node: ?{|
              +id: string,
              +user_id: string,
              +comment_content: string,
              +image_url: ?string,
              +created_ts: number,
            |},
          |}>
        |},
      |},
    |}
  |}
|};
export type addPostMutation = {|
  variables: addPostMutationVariables,
  response: addPostMutationResponse,
|};
*/


/*
mutation addPostMutation(
  $input: addPostInput!
) {
  add_post(input: $input) {
    postEdge {
      cursor
      node {
        id
        user_id
        title
        post_content
        image_url
        created_ts
        comments(first: 3) {
          edges {
            cursor
            node {
              id
              user_id
              comment_content
              image_url
              created_ts
            }
          }
        }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "user_id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image_url",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created_ts",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "addPostPayload",
    "kind": "LinkedField",
    "name": "add_post",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PostEdge",
        "kind": "LinkedField",
        "name": "postEdge",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "post_content",
                "storageKey": null
              },
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 3
                  }
                ],
                "concreteType": "CommentConnection",
                "kind": "LinkedField",
                "name": "comments",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommentEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Comment",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "comment_content",
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "comments(first:3)"
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
    "name": "addPostMutation",
    "selections": (v6/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addPostMutation",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "1841cfb51669a09629db98f398b126a3",
    "id": null,
    "metadata": {},
    "name": "addPostMutation",
    "operationKind": "mutation",
    "text": "mutation addPostMutation(\n  $input: addPostInput!\n) {\n  add_post(input: $input) {\n    postEdge {\n      cursor\n      node {\n        id\n        user_id\n        title\n        post_content\n        image_url\n        created_ts\n        comments(first: 3) {\n          edges {\n            cursor\n            node {\n              id\n              user_id\n              comment_content\n              image_url\n              created_ts\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '06a0689c86bc28e78fa78672e548bc6f';

module.exports = node;
