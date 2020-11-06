/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostContainer_post$ref = any;
export type PostViewContainerQueryVariables = {|
  id: string,
  comment_count?: ?number,
|};
export type PostViewContainerQueryResponse = {|
  +post: ?{|
    +$fragmentRefs: PostContainer_post$ref
  |}
|};
export type PostViewContainerQuery = {|
  variables: PostViewContainerQueryVariables,
  response: PostViewContainerQueryResponse,
|};
*/


/*
query PostViewContainerQuery(
  $id: ID!
  $comment_count: Int
) {
  post(id: $id) {
    ...PostContainer_post_3k2ohe
    id
  }
}

fragment PostContainer_post_3k2ohe on Post {
  id
  user_id
  title
  post_content
  image_url
  created_ts
  comments(first: $comment_count) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "comment_count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "user_id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image_url",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created_ts",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostViewContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "comment_count",
                "variableName": "comment_count"
              }
            ],
            "kind": "FragmentSpread",
            "name": "PostContainer_post"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PostViewContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
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
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "comment_count"
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "comment_content",
                        "storageKey": null
                      },
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ],
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
    ]
  },
  "params": {
    "cacheID": "bb51013121c0ec4bd6ea2f99eaec809a",
    "id": null,
    "metadata": {},
    "name": "PostViewContainerQuery",
    "operationKind": "query",
    "text": "query PostViewContainerQuery(\n  $id: ID!\n  $comment_count: Int\n) {\n  post(id: $id) {\n    ...PostContainer_post_3k2ohe\n    id\n  }\n}\n\nfragment PostContainer_post_3k2ohe on Post {\n  id\n  user_id\n  title\n  post_content\n  image_url\n  created_ts\n  comments(first: $comment_count) {\n    edges {\n      cursor\n      node {\n        id\n        user_id\n        comment_content\n        image_url\n        created_ts\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '59517c0799a29d02a58faa6a4f67703e';

module.exports = node;
