import { DataStore } from 'notarealdb';
import moment from 'moment';

const getCurrentTS=()=>moment().unix();

const Store = new DataStore('./data');
const Collection = {
  authors: Store.collection('authors'),
  posts: Store.collection('posts'),
  comments: Store.collection('comments')
}

export default Collection;

export const getPostById = (id) => Store.posts.get(id);
export const getUserById = (id) => Store.users.get(id);
export const getCommentById = (id) => Store.comments.get(id);

export const getPosts = ({first,last,before,after}) =>{
  return new Promise((resolve,reject)=>{
    resolve(Store.posts.list());
  });
}
export const getUsers = ({first,last,before,after}) =>{
  return new Promise((resolve,reject)=>{
    resolve(Store.users.list());
  });
}
export const getComments = ({first,last,before,after}) =>{
  return new Promise((resolve,reject)=>{
    resolve(Store.comments.list());
  });
}

export const dbAddUser = () =>{
  return new Promise((resolve,reject)=>{
    resolve(Store.user.create({
      created_ts: getCurrentTS(),
      modified_ts: getCurrentTS()
    }));
  });
}

export const dbAddPost = ({user, title, post_content, image_url}) =>{
  return new Promise((resolve,reject)=>{
    resolve(Store.posts.create({
      user: user,
      title: title,
      post_content: post_content,
      image_url: image_url,
      created_ts: getCurrentTS(),
      modified_ts: getCurrentTS()
    }));
  });
}

export const dbAddComment = ({user, post, comment_content, image_url}) =>{
  return new Promise((resolve,reject)=>{
    resolve(Store.posts.create({
      user: user,
      post: post,
      comment_content: comment_content,
      image_url: image_url,
      created_ts: getCurrentTS(),
      modified_ts: getCurrentTS()
    }));
  });
}