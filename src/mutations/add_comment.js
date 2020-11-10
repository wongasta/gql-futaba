//@flow
import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import type {Environment as EnvironmentType} from 'relay-runtime';

export type PostInputType={
  user: ?string,
  post: string,
  comment_content: string,
  image_url: ?string
}
export type CommentType={
    id: string,
    user: string,
    user_id: string,
    post: string,
    title: void,
    comment_content: string,
    image_url: ?string,
    created_ts: number
}
export type CommentEdgeType={
  cursor: string,
  node: CommentType
}
type AddCommentPayloadType={
  commentEdge: CommentEdgeType
}
type SuccessCbType=(AddCommentPayloadType)=>void

const mutation = graphql`
  mutation addCommentMutation($input: addCommentInput!){
    add_comment(input: $input){
      commentEdge{
        cursor
        node{
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
`;

export default (function add_comment(environment, postInput, successCb){
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: postInput
      },
      onCompleted: (response, error)=>{
        successCb(response.add_comment);
      },
      onError: (error)=>{
        console.log(error)
      },
      updater: (store, data)=>{
        const newCommentEdge = store.getRootField('add_comment')?.getLinkedRecord('commentEdge');
        const comments = store.get(postInput.post)?.getLinkedRecord('comments',{first: 2147483647});
        comments?.setLinkedRecords([...(comments?.getLinkedRecords('edges') || []), newCommentEdge], 'edges');
      }
    }
  )
}: (EnvironmentType,PostInputType,SuccessCbType)=>void)