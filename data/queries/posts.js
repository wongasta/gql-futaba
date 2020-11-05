import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import {
  globalIdField,
  connectionDefinitions,
  connectionFromPromisedArray,
  connectionArgs,
} from 'graphql-relay';
import { getPosts } from '../database.js';
import { PostConnection } from "../node.js";

export const postsQuery = {
  type: PostConnection,
  args: connectionArgs,
  resolve: (_, args)=>{
    return connectionFromPromisedArray(getPosts(args),args);
  }
}