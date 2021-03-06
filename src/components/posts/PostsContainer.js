//@flow
import * as React from "react";
import { useState } from "react";
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import styles from './PostsContainer.module.css';
import PostsPagination from "./PostsPagination";
import CreatePostInput from "./CreatePostInput";
import type {Environment as EnvironmentType} from 'relay-runtime';
import type {Props as PostsQueryType} from './PostsPagination';

type Props={
  environment: EnvironmentType
}
type RenderQueryProps={
  error: any,
  props: ?PostsQueryType
}

export default function PostsContainer({environment}:Props): React.Node{
  const [newThreadFlag, toggleThreadFlag] = useState<boolean>(false);
  function GeneratePostCreator():React.Node{
    if(newThreadFlag) return <CreatePostInput environment={environment} />;
    return (
      <span className={styles.new_thread_text}>[ <a href="/#" onClick={(e)=>{
        e.preventDefault();
        toggleThreadFlag(true)
      }}>Start a New Thread</a> ]</span>
    )
  }
  return(
    <QueryRenderer
      environment={environment}
      query={graphql`
        query PostsContainerQuery($count: Int){
          ...PostsPagination_posts @arguments(count: $count)
        }
      `}
      variables={{count: 4}}
      render={({error,props}: RenderQueryProps):React.Node=>{
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