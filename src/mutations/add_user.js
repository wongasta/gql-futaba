import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const mutation = graphql`
  mutation addUserMutation{
    add_user{
      id
      user_id
      created_ts
      modified_ts
    }
  }
`;

export default function add_user(environment, successCb){
  commitMutation(
    environment,
    {
      mutation,
      onCompleted: (response, error)=>{
        successCb(response.add_user);
      }
    }
  )
}