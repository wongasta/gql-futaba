import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import {
  nodeDefinitions,
  fromGlobalId,
  globalIdField,
  connectionDefinitions,
  connectionArgs,
  connectionFromPromisedArray,
} from 'graphql-relay';
import {getUserById, getPostById, getCommentById, getCommentsByPostId, getPosts} from './database.js';

const getObjectById=async (type,id)=>{
  const retriever = {
    user: getUserById,
    post: getPostById,
    comment: getCommentById
  };
  return await retriever[type](id);
}

const AdditionalPageInfo = {
  totalCount: {
    type: GraphQLInt,
    resolve: (conn)=>{
      return conn.edges.length
    }
  }
};

export const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId)=>{
    const { type,id } = fromGlobalId(globalId);
    return getObjectById(type.toLowerCase(),id);
  },
  (object)=>{
    if(object.user_id) return userType;
    if(object.post_content) return postType;
    if(object.comment_content) return commentType;
    return null;
  }
);

export const commentType = new GraphQLObjectType({
  name: 'Comment',
  description: 'Futaba comment',
  fields: {
    id: globalIdField(),
    user: { type: GraphQLID },
    post: { type: GraphQLID },
    comment_content: { type: GraphQLString },
    image_url: { type: GraphQLString },
    created_ts: { type: GraphQLInt },
    modified_ts: { type: GraphQLInt }
  },
  interfaces: [nodeInterface]
});

export const { connectionType: CommentConnection, edgeType: CommentEdge } = connectionDefinitions({
  nodeType: commentType,
  connectionFields: ()=>(AdditionalPageInfo)
});

export const postType = new GraphQLObjectType({
  name: 'Post',
  description: 'Futaba post',
  fields: {
    id: globalIdField(),
    user: { type: GraphQLID },
    title: { type: GraphQLString },
    post_content: { type: GraphQLString },
    image_url: { type: GraphQLString },
    comments: {
      type: CommentConnection,
      args: connectionArgs,
      resolve: (source, args)=>{
        return connectionFromPromisedArray(getCommentsByPostId(source),args);
      }
    },
    created_ts: { type: GraphQLInt },
    modified_ts: { type: GraphQLInt }
  },
  interfaces: [nodeInterface]
});

export const { connectionType: PostConnection, edgeType: PostEdge } = connectionDefinitions({
  nodeType: postType,
  connectionFields: ()=>(AdditionalPageInfo)
});

export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'Futaba user',
  fields: {
    id: globalIdField(),
    user_id: { type: GraphQLID },
    created_ts: { type: GraphQLInt },
    modified_ts: { type: GraphQLInt },
    posts: {
      type: PostConnection,
      args: connectionArgs,
      resolve: (_, args)=>{
        return connectionFromPromisedArray(getPosts(args),args);
      }
    }
  },
  interfaces: [nodeInterface]
});