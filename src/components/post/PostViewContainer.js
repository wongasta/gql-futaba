import React, { useState } from "react";
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {useParams} from "react-router-dom";
import styles from './PostViewContainer.module.css';
import PostContainer from "./PostContainer";
import CreateCommentInput from "./CreateCommentInput";

export default function PostViewContainer({environment}){
  const [newThreadFlag, toggleThreadFlag] = useState(false);
  let { post_id } = useParams();
  function GeneratePostCreator(){
    if(newThreadFlag) return <CreateCommentInput environment={environment} postId={post_id} />;
    return (
      <span className={styles.new_thread_text}>[ <a href="/#" onClick={(e)=>{
        e.preventDefault();
        toggleThreadFlag(true)
      }}>Post a Reply</a> ]</span>
    )
  }
  return(
    <QueryRenderer
      environment={environment}
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
        if(error) return (<div className={styles.post_container}><h3>Error!</h3></div>);
        if(!props) return (<div className={styles.post_container}><h3>Loading...</h3></div>);
        return (
          <div className={styles.post_container}>
            <div className={styles.create_post_container}>
              {GeneratePostCreator()}
            </div>
            <PostContainer post={props.post} />
          </div>
        )
      }}
    />
  )
}