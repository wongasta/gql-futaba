import React from "react";
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import styles from './PostPreview.module.css';

function PostPreview(props){
  const {title} = props.post;
  return (
    <section className={styles.previewContainer}>
      <h6>{title}</h6>
    </section>
  )
}

export default createFragmentContainer(
  PostPreview,
  {
    post: graphql`
      fragment PostPreview_post on Post {
        user_id
        title
        post_content
        image_url
      }
    `
  }
)