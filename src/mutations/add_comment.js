import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

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

export default function add_comment(environment, postInput, successCb){
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
        const newCommentEdge = store.getRootField('add_comment').getLinkedRecord('commentEdge');
        const comments = store.get(postInput.post).getLinkedRecord('comments',{first: 2147483647});
        comments.setLinkedRecords([...comments.getLinkedRecords('edges'), newCommentEdge], 'edges');
      }
    }
  )
}