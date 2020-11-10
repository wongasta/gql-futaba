//@flow
import * as React from "react";
import {createPaginationContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import styles from "./PostsPagination.module.css";
import PostContainer from "../post/PostContainer";
import type {PostEdgeType} from '../../mutations/add_post';

export type Props={
  posts:{
    posts:{
      edges: Array<PostEdgeType>
    }
  },
  relay: any
}

const POSTS_PER_PAGE=4;

function PostsPagination(props: Props): React.Node{
  const GeneratePagination=(): React.Node=>{
    return (
      <div className={styles.pagination_container}>
        <button className={styles.pagination_button} disabled={!props.relay.hasMore()} onClick={()=> props.relay.loadMore(POSTS_PER_PAGE)}>Load More</button>
      </div>
    )
  };
  const edges = props.posts.posts.edges;
  if(!edges.length) return (<div className={styles.page_container}><h3>No Posts</h3></div>)
  return (
    <div className={styles.page_container}>
      <div className={styles.posts_container}>
        {edges.map((edge)=>
          <PostContainer isPost={true} key={edge.cursor} post={edge.node} />
        )}
      </div>
      {GeneratePagination()}
    </div>
  )
}

export default (createPaginationContainer(
  PostsPagination,
  {
    posts: graphql`
      fragment PostsPagination_posts on Query
      @argumentDefinitions(
        count: {type: "Int", defaultValue: 3}
        cursor: {type: "String"}
      ){
        posts(first: $count, after: $cursor) @connection(key: "PostsPagination_posts"){
          edges{
            cursor
            node{
              ...PostContainer_post @arguments(comment_count: 3)
            }
          }
          pageInfo{
            hasNextPage
            endCursor
          }
        }
      }
    `
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.posts.posts;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        count,
        cursor
      };
    },
    query: graphql`
      query PostsPaginationQuery(
        $count: Int!
        $cursor: String
      ){
        ...PostsPagination_posts @arguments(count: $count, cursor: $cursor)
      }
    `
  }
): any)