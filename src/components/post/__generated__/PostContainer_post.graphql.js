/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostContainer_post$ref: FragmentReference;
declare export opaque type PostContainer_post$fragmentType: PostContainer_post$ref;
export type PostContainer_post = {|
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
  +$refType: PostContainer_post$ref,
|};
export type PostContainer_post$data = PostContainer_post;
export type PostContainer_post$key = {
  +$data?: PostContainer_post$data,
  +$fragmentRefs: PostContainer_post$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "user_id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image_url",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created_ts",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 3,
      "kind": "LocalArgument",
      "name": "comment_count"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostContainer_post",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
    (v2/*: any*/),
    (v3/*: any*/),
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
                (v0/*: any*/),
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "comment_content",
                  "storageKey": null
                },
                (v2/*: any*/),
                (v3/*: any*/)
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
  "type": "Post",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '674d89d55d1a9bf6058c1e161b294ca0';

module.exports = node;
