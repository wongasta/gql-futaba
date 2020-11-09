/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostsPagination_posts$ref = any;
export type PostsPaginationTestQueryVariables = {|
  count?: ?number
|};
export type PostsPaginationTestQueryResponse = {|
  +$fragmentRefs: PostsPagination_posts$ref
|};
export type PostsPaginationTestQuery = {|
  variables: PostsPaginationTestQueryVariables,
  response: PostsPaginationTestQueryResponse,
|};
*/


/*
query PostsPaginationTestQuery(
  $count: Int
) {
  ...PostsPagination_posts_yu5n1
}

fragment PostContainer_post_2uLzyZ on Post {
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

fragment PostsPagination_posts_yu5n1 on Query {
  posts(first: $count) {
    edges {
      cursor
      node {
        ...PostContainer_post_2uLzyZ
        id
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostsPaginationTestQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          }
        ],
        "kind": "FragmentSpread",
        "name": "PostsPagination_posts"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostsPaginationTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PostConnection",
        "kind": "LinkedField",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
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
                          (v2/*: any*/),
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
                    "storageKey": "comments(first:3)"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "PostsPagination_posts",
        "kind": "LinkedHandle",
        "name": "posts"
      }
    ]
  },
  "params": {
    "cacheID": "c3d29a1a5572070e1b11f26376526cf2",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "posts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PostConnection"
        },
        "posts.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "PostEdge"
        },
        "posts.edges.cursor": (v7/*: any*/),
        "posts.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Post"
        },
        "posts.edges.node.__typename": (v7/*: any*/),
        "posts.edges.node.comments": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommentConnection"
        },
        "posts.edges.node.comments.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommentEdge"
        },
        "posts.edges.node.comments.edges.cursor": (v7/*: any*/),
        "posts.edges.node.comments.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Comment"
        },
        "posts.edges.node.comments.edges.node.comment_content": (v7/*: any*/),
        "posts.edges.node.comments.edges.node.created_ts": (v8/*: any*/),
        "posts.edges.node.comments.edges.node.id": (v9/*: any*/),
        "posts.edges.node.comments.edges.node.image_url": (v10/*: any*/),
        "posts.edges.node.comments.edges.node.user_id": (v9/*: any*/),
        "posts.edges.node.created_ts": (v8/*: any*/),
        "posts.edges.node.id": (v9/*: any*/),
        "posts.edges.node.image_url": (v10/*: any*/),
        "posts.edges.node.post_content": (v7/*: any*/),
        "posts.edges.node.title": (v7/*: any*/),
        "posts.edges.node.user_id": (v9/*: any*/),
        "posts.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "posts.pageInfo.endCursor": (v10/*: any*/),
        "posts.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        }
      }
    },
    "name": "PostsPaginationTestQuery",
    "operationKind": "query",
    "text": "query PostsPaginationTestQuery(\n  $count: Int\n) {\n  ...PostsPagination_posts_yu5n1\n}\n\nfragment PostContainer_post_2uLzyZ on Post {\n  id\n  user_id\n  title\n  post_content\n  image_url\n  created_ts\n  comments(first: 3) {\n    edges {\n      cursor\n      node {\n        id\n        user_id\n        comment_content\n        image_url\n        created_ts\n      }\n    }\n  }\n}\n\nfragment PostsPagination_posts_yu5n1 on Query {\n  posts(first: $count) {\n    edges {\n      cursor\n      node {\n        ...PostContainer_post_2uLzyZ\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b0516db410df8756f514d9ff57aad966';

module.exports = node;
