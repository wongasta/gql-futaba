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
  connectionArgs, connectionFromPromisedArray,
} from 'graphql-relay';
import {getUserById, getPostById, getCommentById, getComments, getPosts} from './database.js';

const getObjectById=(type,id)=>{
  const retriever = {
    user: getUserById,
    post: getPostById,
    comment: getCommentById
  };
  return retriever[type](id);
}

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
    user: globalIdField(),
    post: globalIdField(),
    comment_content: { type: GraphQLString },
    image_url: { type: GraphQLString },
    created_ts: { type: GraphQLInt },
    modified_ts: { type: GraphQLInt }
  },
  interfaces: [nodeInterface]
});

export const postType = new GraphQLObjectType({
  name: 'Post',
  description: 'Futaba post',
  fields: {
    id: globalIdField(),
    user: globalIdField(),
    title: { type: GraphQLString },
    post_content: { type: GraphQLString },
    image_url: { type: GraphQLString },
    comments: {
      type: new GraphQLList(commentType),
      resolve: (_)=>{
        return getComments();
      }
    },
    created_ts: { type: GraphQLInt },
    modified_ts: { type: GraphQLInt }
  },
  interfaces: [nodeInterface]
});

export const { connectionType: PostsConnection } = connectionDefinitions({
  nodeType: postType,
  connectionFields: ()=>({
    totalCount: {
      type: GraphQLInt,
      resolve: (conn)=>{
        return conn.edges.length
      }
    }
  })
});

export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'Futaba user',
  fields: {
    id: globalIdField(),
    user_id: { type: GraphQLString },
    created_ts: { type: GraphQLInt },
    modified_ts: { type: GraphQLInt },
    posts: {
      type: PostsConnection,
      args: connectionArgs,
      resolve: (_, args)=>{
        return connectionFromPromisedArray(getPosts(args),args);
      }
    }
  },
  interfaces: [nodeInterface]
});