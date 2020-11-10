//@flow
import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import type {Environment as EnvironmentType} from 'relay-runtime';

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

export type AddUserPayload={
  id: string,
  user_id: string,
  created_ts: number,
  modified_ts: number
}

type AddUserSuccessCb=(AddUserPayload)=>void

export default function add_user(environment:EnvironmentType, successCb:AddUserSuccessCb){
  commitMutation(
    environment,
    {
      mutation,
      variables: {},
      onCompleted: (response, error)=>{
        successCb(response.add_user);
      }
    }
  )
}