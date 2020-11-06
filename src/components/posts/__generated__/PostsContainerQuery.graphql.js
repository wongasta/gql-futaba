/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostContainer_post$ref = any;
export type PostsContainerQueryVariables = {|
  before?: ?string,
  after?: ?string,
  first?: ?number,
  comments_count?: ?number,
|};
export type PostsContainerQueryResponse = {|
  +posts: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +$fragmentRefs: PostContainer_post$ref
      |},
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
      +startCursor: ?string,
      +endCursor: ?string,
    |},
  |}
|};
export type PostsContainerQuery = {|
  variables: PostsContainerQueryVariables,
  response: PostsContainerQueryResponse,
|};
*/


/*
query PostsContainerQuery(
  $before: String
  $after: String
  $first: Int
  $comments_count: Int
) {
  posts(before: $before, after: $after, first: $first) {
    edges {
      cursor
      node {
        ...PostContainer_post
        id
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}

fragment PostContainer_post on Post {
  user_id
  title
  post_content
  image_url
  created_ts
  comments(first: $comments_count) {
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
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "comments_count"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v6 = {
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
      "name": "hasPreviousPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startCursor",
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
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "user_id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image_url",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created_ts",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostsContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
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
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "PostContainer_post"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
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
      (v0/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "PostsContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
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
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
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
                  (v8/*: any*/),
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Variable",
                        "name": "first",
                        "variableName": "comments_count"
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
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Comment",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v10/*: any*/),
                              (v7/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "comment_content",
                                "storageKey": null
                              },
                              (v8/*: any*/),
                              (v9/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c6d537aec84b91efeb54a2aa2ceabd0b",
    "id": null,
    "metadata": {},
    "name": "PostsContainerQuery",
    "operationKind": "query",
    "text": "query PostsContainerQuery(\n  $before: String\n  $after: String\n  $first: Int\n  $comments_count: Int\n) {\n  posts(before: $before, after: $after, first: $first) {\n    edges {\n      cursor\n      node {\n        ...PostContainer_post\n        id\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment PostContainer_post on Post {\n  user_id\n  title\n  post_content\n  image_url\n  created_ts\n  comments(first: $comments_count) {\n    edges {\n      cursor\n      node {\n        id\n        user_id\n        comment_content\n        image_url\n        created_ts\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c2d0189efa85fdc084feaae1cfe2dd7a';

module.exports = node;
