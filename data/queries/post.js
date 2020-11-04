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
import {fromGlobalId, globalIdField} from "graphql-relay";

export const postQuery = {
  type: postType,
  args: {
    id: globalIdField()
  },
  resolve: (_, args)=>{
    const { id:PostId }=fromGlobalId(args.id);
    return getPostById(PostId);
  }
}