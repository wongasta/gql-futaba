//@flow
import {commitMutation} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';
import type {Environment as EnvironmentType} from 'relay-runtime';
import type {CommentEdgeType} from './add_comment';

export type PostInputType={
  user: ?string,
  title: string,
  post_content: string,
  image_url: ?string
}
export type PostType={
  id: string,
  user_id: string,
  title: string,
  post_content: string,
  image_url: ?string,
  created_ts: number,
  comments: {
    edges: Array<CommentEdgeType>
  }
}
export type PostEdgeType={
  cursor: string,
  node: PostType
}
type AddPostPayloadType={
  postEdge: PostEdgeType
}
type SuccessCbType=(AddPostPayloadType)=>void

const mutation = graphql`
  mutation addPostMutation($input: addPostInput!){
    add_post(input: $input){
      postEdge{
        cursor
        node{
          id
          user_id
          title
          post_content
          image_url
          created_ts
          comments (first: 3){
            edges{
              cursor
              node{
                id
                user_id,
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
`;

export default (function add_post(environment, postInput, successCb){
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: postInput
      },
      onCompleted: (response, error)=>{
        successCb(response.add_post);
      },
      updater: (store, data)=>{
        const postEdge = store.getRootField('add_post')?.getLinkedRecord('postEdge');
        const postsConnection = ConnectionHandler?.getConnection(
          store.getRoot(),
          'PostsPagination_posts',
          {}
        );
        if(postEdge && postsConnection) ConnectionHandler?.insertEdgeBefore(postsConnection, postEdge);
      }
    }
  )
}:(EnvironmentType, PostInputType, SuccessCbType)=>void)