import React from "react";
import {createFragmentContainer} from 'react-relay';
import {Link} from "react-router-dom";
import parse from 'html-react-parser';
import moment from 'moment';
import graphql from 'babel-plugin-relay/macro';
import styles from './PostContainer.module.css';

function generateHeader({id,user_id,title,created_ts},showExpand=false){
  return (
    <p className={styles.preview_header}>
      {title?(<span className={styles.title_display}>{title} </span>):null}
      <span className={styles.user_display}>{user_id} </span>
      <span className={styles.ts_display}>{moment.unix(created_ts).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>
      {showExpand?(<span className={styles.expand}>[ <Link to={`/post/${id}`}>Expand</Link> ]</span>):null}
    </p>
  )
}

function PostContainer(props){
  const {title,post_content,image_url,comments} = props.post;
  const isPost=props.isPost;
  const comment_nodes = comments.edges;
  const has_comment = comment_nodes.length;
  let commentsContainer=null;
  if(has_comment){
    commentsContainer=comment_nodes.map((edge)=> {
      const comment=edge.node;
      return (<div className={styles.comment_container} key={edge.cursor}>
        {comment.image_url?(<img alt={comment.title} src={comment.image_url} className={styles.post_img} />):null}
        {generateHeader(comment)}
        <div className={styles.content_container}>{parse(comment.comment_content)}</div>
      </div>);
    });
  }
  return (
    <section className={styles.container}>
      {image_url?(<img alt={title} src={image_url} className={styles.post_img} />):null}
      {generateHeader(props.post,!!isPost)}
      <div className={styles.content_container}>{parse(post_content)}</div>
      {commentsContainer}
    </section>
  )
}

export default createFragmentContainer(
  PostContainer,
  {
    post: graphql`
      fragment PostContainer_post on Post @argumentDefinitions(
        comment_count: {type: "Int", defaultValue: 3}
      ){
        id
        user_id
        title
        post_content
        image_url
        created_ts
        comments(first: $comment_count){
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
    `
  }
)