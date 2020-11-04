import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import {
  fromGlobalId,
} from 'graphql-relay';
import {getPostById, getPosts, getUserById} from '../database.js';
import { userType } from "../node.js";

export const userQuery = {
  type: userType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) }
  },
  resolve: (_, args)=>{
    const User=getUserById(args.id);
    const { id:UserId }=fromGlobalId(User.id);
    User.user_id=UserId;
    return User;
  }
}