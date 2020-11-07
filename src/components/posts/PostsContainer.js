import React, { useState } from "react";
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import Environment from '../../util/relayEnv';
import styles from './PostsContainer.module.css';
import PostsPagination from "./PostsPagination";
import CreatePostInput from "./CreatePostInput";
export default function PostsContainer(props){
  const [newThreadFlag, toggleThreadFlag] = useState(false);
  function GeneratePostCreator(){
    if(newThreadFlag) return <CreatePostInput />;
    return (
      <span className={styles.new_thread_text}>[ <a href="/#" onClick={(e)=>{
        e.preventDefault();
        toggleThreadFlag(true)
      }}>Start a New Thread</a> ]</span>
    )
  }
  return(
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query PostsContainerQuery($count: Int){
          ...PostsPagination_posts @arguments(count: $count)
        }
      `}
      variables={{count: 4}}
      render={({error,props})=>{
        if(error) return (<div className={styles.posts_container}><h3>Error!</h3></div>);
        if(!props) return (<div className={styles.posts_container}><h3>Loading...</h3></div>);
        return (
          <div className={styles.page_container}>
            <div className={styles.create_post_container}>
              {GeneratePostCreator()}
            </div>
            <PostsPagination posts={props} />
          </div>
        )
      }}
    />
  )
}