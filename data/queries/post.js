import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import {getPostById, getPosts} from '../database.js';
import { postType } from "../node.js";

export const postQuery = {
  type: postType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) }
  },
  resolve: (_, args)=>{
    return getPostById(args.id);
  }
}