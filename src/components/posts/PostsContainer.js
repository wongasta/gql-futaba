import React, { useState } from "react";
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import Environment from '../../util/relayEnv';
import styles from './PostContainer.module.css';
import PostsPagination from "./PostsPagination";

function PostsContainer(props){
  const [newThreadFlag, toggleThreadFlag] = useState(false);
  return(
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query PostsContainerQuery{
          ...PostsPagination_posts
        }
      `}
      render={({error,props})=>{
        if(error) return (<div className={styles.posts_container}>Error!</div>);
        if(!props) return (<div className={styles.posts_container}>Loading...</div>);
        return (
          <div className={styles.page_container}>
            <PostsPagination posts={props} />
          </div>
        )
      }}
    />
  )
}

export default PostsContainer;