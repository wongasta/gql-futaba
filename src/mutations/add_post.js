import {commitMutation} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';

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

export default function add_post(environment, postInput, successCb){
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
        const postEdge = store.getRootField('add_post').getLinkedRecord('postEdge');
        const postsConnection = ConnectionHandler.getConnection(
          store.getRoot(),
          'PostsPagination_posts',
          {}
        );
        ConnectionHandler.insertEdgeBefore(postsConnection, postEdge);
      }
    }
  )
}