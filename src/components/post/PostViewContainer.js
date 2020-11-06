import React, { useState } from "react";
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {useParams} from "react-router-dom";
import Environment from '../../util/relayEnv';
import styles from './PostViewContainer.module.css';
import PostContainer from "./PostContainer";

export default function PostViewContainer(props){
  const [newThreadFlag, toggleThreadFlag] = useState(false);
  let { post_id } = useParams();
  return(
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query PostViewContainerQuery($id: ID!, $comment_count: Int){
          post(id: $id){
            ...PostContainer_post @arguments(comment_count: $comment_count)
          }
        }
      `}
      variables={{
        id: post_id,
        comment_count: 2147483647
      }}
      render={({error,props})=>{
        if(error) return (<div className={styles.post_container}>Error!</div>);
        if(!props) return (<div className={styles.post_container}>Loading...</div>);
        return (
          <div className={styles.post_container}>
            <PostContainer post={props.post} />
          </div>
        )
      }}
    />
  )
}