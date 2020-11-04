import { DataStore } from 'notarealdb';
import {
  fromGlobalId,
  toGlobalId
} from 'graphql-relay';
import moment from 'moment';

const getCurrentTS=()=>moment().unix();

const Store = new DataStore('./data');
const Collection = {
  authors: Store.collection('authors'),
  posts: Store.collection('posts'),
  comments: Store.collection('comments')
}

export default Collection;

const transformId=(type,id)=>toGlobalId(type,id);

export const getPostById = (id) =>{
  return new Promise((resolve,reject)=> {
    let Post = Store.posts.get(id);
    Post['user_id'] = Post.id;
    Post['id'] = transformId('User', Post.id);
    resolve(Post);
  });
}
export const getUserById = (id) =>{
  return new Promise((resolve,reject)=> {
    let User = Store.users.get(id);
    User['id'] = transformId('Post', User.id);
    resolve(User);
  });
}
export const getCommentById = (id) => {
  return new Promise((resolve,reject)=> {
    let Comment = Store.comments.get(id);
    Comment['id'] = transformId('Comment', Comment.id);
    resolve(Comment);
  });
}

export const getPosts = ({first,last,before,after}) =>{
  return new Promise((resolve,reject)=>{
    let posts=Store.posts.list();
    posts=posts.map((post)=>{
      post['id']=transformId('Post',post.id);
      return post;
    });
    resolve(posts);
  });
}
export const getUsers = ({first,last,before,after}) =>{
  return new Promise((resolve,reject)=>{
    let users=Store.users.list();
    users=users.map((user)=>{
      user['user_id']=user['id'];
      user['id']=transformId('User',user.id);
      return user;
    })
    resolve(users);
  });
}
export const getComments = ({first,last,before,after}) =>{
  return new Promise((resolve,reject)=>{
    let comments=Store.comments.list();
    comments=comments.map((comment)=>{
      comment['id']=transformId('Comment',comment.id);
      return comment;
    });
    resolve(comments);
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
  const { id: userId }=fromGlobalId(user);
  return new Promise((resolve,reject)=>{
    resolve(Store.posts.create({
      user: userId,
      title: title,
      post_content: post_content,
      image_url: image_url,
      created_ts: getCurrentTS(),
      modified_ts: getCurrentTS()
    }));
  });
}

export const dbAddComment = ({user, post, comment_content, image_url}) =>{
  const { id: userId }=fromGlobalId(user);
  const { id: postId }=fromGlobalId(post);
  return new Promise((resolve,reject)=>{
    resolve(Store.posts.create({
      user: userId,
      post: postId,
      comment_content: comment_content,
      image_url: image_url,
      created_ts: getCurrentTS(),
      modified_ts: getCurrentTS()
    }));
  });
}