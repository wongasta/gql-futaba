/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostPreview_post$ref: FragmentReference;
declare export opaque type PostPreview_post$fragmentType: PostPreview_post$ref;
export type PostPreview_post = {|
  +user_id: string,
  +title: string,
  +post_content: string,
  +image_url: ?string,
  +$refType: PostPreview_post$ref,
|};
export type PostPreview_post$data = PostPreview_post;
export type PostPreview_post$key = {
  +$data?: PostPreview_post$data,
  +$fragmentRefs: PostPreview_post$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostPreview_post",
  "selections": [
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image_url",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'afbb0805111af9af0283247dae3d1ad2';

module.exports = node;
