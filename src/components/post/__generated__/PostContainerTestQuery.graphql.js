/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostContainer_post$ref = any;
export type PostContainerTestQueryVariables = {|
  id: string,
  comment_count?: ?number,
|};
export type PostContainerTestQueryResponse = {|
  +post: ?{|
    +$fragmentRefs: PostContainer_post$ref
  |}
|};
export type PostContainerTestQuery = {|
  variables: PostContainerTestQueryVariables,
  response: PostContainerTestQueryResponse,
|};
*/


/*
query PostContainerTestQuery(
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
},
v7 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v8 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
},
v9 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostContainerTestQuery",
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
    "name": "PostContainerTestQuery",
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
    "cacheID": "83803c1532f7e2e35606c2f3f464010d",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "post": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Post"
        },
        "post.comments": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommentConnection"
        },
        "post.comments.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommentEdge"
        },
        "post.comments.edges.cursor": (v7/*: any*/),
        "post.comments.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Comment"
        },
        "post.comments.edges.node.comment_content": (v7/*: any*/),
        "post.comments.edges.node.created_ts": (v8/*: any*/),
        "post.comments.edges.node.id": (v9/*: any*/),
        "post.comments.edges.node.image_url": (v10/*: any*/),
        "post.comments.edges.node.user_id": (v9/*: any*/),
        "post.created_ts": (v8/*: any*/),
        "post.id": (v9/*: any*/),
        "post.image_url": (v10/*: any*/),
        "post.post_content": (v7/*: any*/),
        "post.title": (v7/*: any*/),
        "post.user_id": (v9/*: any*/)
      }
    },
    "name": "PostContainerTestQuery",
    "operationKind": "query",
    "text": "query PostContainerTestQuery(\n  $id: ID!\n  $comment_count: Int\n) {\n  post(id: $id) {\n    ...PostContainer_post_3k2ohe\n    id\n  }\n}\n\nfragment PostContainer_post_3k2ohe on Post {\n  id\n  user_id\n  title\n  post_content\n  image_url\n  created_ts\n  comments(first: $comment_count) {\n    edges {\n      cursor\n      node {\n        id\n        user_id\n        comment_content\n        image_url\n        created_ts\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e74a27c840afebb1bcbe26eb8402edf2';

module.exports = node;
