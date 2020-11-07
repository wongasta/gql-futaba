import { DataStore } from 'notarealdb';
import {
  fromGlobalId,
  toGlobalId
} from 'graphql-relay';
import _ from 'lodash';
import moment from 'moment';

const getCurrentTS=()=>moment().unix();

const Store = new DataStore('./data/db');
const Collection = {
  users: Store.collection('users'),
  posts: Store.collection('posts'),
  comments: Store.collection('comments')
}

export default Collection;

export const getPostById = (id) =>{
  return new Promise((resolve,reject)=> {
    const FoundPost = Collection.posts.get(id);
    if(!FoundPost) return resolve(null);
    let Post = _.cloneDeep(FoundPost);
    Post.user_id=Post.user;
    Post.user=toGlobalId('User',Post.user);
    resolve(Post);
  });
}
export const getUserById = (id) =>{
  return new Promise((resolve,reject)=> {
    const FoundUser = Collection.users.get(id);
    if(!FoundUser) return resolve(null);
    let User = _.cloneDeep(FoundUser);
    User.user_id = User.id;
    resolve(User);
  });
}
export const getCommentById = (id) => {
  return new Promise((resolve,reject)=> {
    let Comment = _.cloneDeep(Collection.comments.get(id));
    Comment.user_id=Comment.user;
    Comment.user=toGlobalId('User',Comment.user);;
    resolve(Comment);
  });
}

export const getPosts = ({first,last,before,after}) => {
  return new Promise((resolve,reject)=>{
    let posts=_.cloneDeep(Collection.posts.list()).reverse();
    posts=posts.map((post)=>{
      post.user_id=post.user;
      post.user=toGlobalId('User',post.user);
      return post;
    })
    resolve(posts);
  });
}

export const getPostsCount = ()=>{
  return new Promise((resolve,reject)=>{
    resolve(Collection.posts.list().length);
  });
}

export const getUsers = ({first,last,before,after}) => {
  return new Promise((resolve,reject)=>{
    let users=_.cloneDeep(Collection.users.list());
    users=users.map((user)=>{
      user.user_id=user.id;
      return user;
    })
    resolve(users);
  });
}

export const getCommentsByPostId = ({id:postId}) => {
  return new Promise((resolve,reject)=>{
    let comments=_.cloneDeep(Collection.comments.list()).filter((comment)=>comment.post===postId);
    comments=comments.map((comment)=>{
      comment.user_id=comment.user;
      comment.user=toGlobalId('User',comment.user);
      comment.post=toGlobalId('Post',comment.post);
      return comment;
    })
    resolve(comments);
  });
}

export const dbAddUser = () =>{
  return new Promise((resolve,reject)=> {
    resolve(Collection.users.create({
      created_ts: getCurrentTS(),
      modified_ts: getCurrentTS()
    }));
  });
}

export const dbAddPost = async ({user, title, post_content, image_url}) => {
  const { id: userId }=fromGlobalId(user);
  const foundUser = await getUserById(userId);
  if(!foundUser) return new Error("Invalid user id");
  return new Promise((resolve,reject)=>{
    resolve(Collection.posts.create({
      user: userId,
      title: title,
      post_content: post_content,
      image_url: image_url,
      created_ts: getCurrentTS(),
      modified_ts: getCurrentTS()
    }));
  });
}

export const dbAddComment = async ({user, post, comment_content, image_url}) => {
  const { id: userId }=fromGlobalId(user);
  const { id: postId }=fromGlobalId(post);
  const foundUser = await getUserById(userId);
  if(!foundUser) return new Error("Invalid user id");
  const foundPost = await getPostById(postId);
  if(!foundPost) return new Error("Invalid post id");
  return new Promise((resolve,reject)=>{
    resolve(Collection.comments.create({
      user: userId,
      post: postId,
      comment_content: comment_content,
      image_url: image_url,
      created_ts: getCurrentTS(),
      modified_ts: getCurrentTS()
    }));
  });
}