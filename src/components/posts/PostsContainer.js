import React, { useState } from "react";
import {useParams} from "react-router-dom";
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import Environment from '../../util/relay-env';
import styles from './PostContainer.module.css';
import PostPreview from "./PostPreview";

const POSTS_PER_PAGE=5;

function PostsContainer(props){
  const { page } = useParams();
  const [newThreadFlag, toggleThreadFlag] = useState(false);
  const [currentPage, updatePage] = useState({direction:"next",cursor:null});
  let variables={};
  if(!currentPage.cursor){
    variables={first: POSTS_PER_PAGE}
  }else if(currentPage.direction==='next'){
    variables={first: POSTS_PER_PAGE,after:currentPage.cursor}
  }else{
    variables={last: POSTS_PER_PAGE,before:currentPage.cursor}
  }
  return(
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query PostsContainerQuery($before: String, $after: String, $first: Int){
          posts(before: $before, after: $after, first: $first){
            edges{
              node{
                ...PostPreview_post
              }
            }
            pageInfo{
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
        }
      `}
      variables={variables}
      render={({error,props})=>{
        if(error) return (<div className={styles.postContainer}>Error!</div>);
        if(!props) return (<div className={styles.postContainer}>Loading...</div>);
        return (
          <div className={styles.postContainer}>
            {props.posts.edges.map((edge)=>
              <PostPreview key={edge.cursor} post={edge.node} />
            )}
          </div>
        )
      }}
    />
  )
}

export default PostsContainer;