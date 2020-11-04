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
  globalIdField
} from 'graphql-relay';
import {getPostById, getPosts, getUserById} from '../database.js';
import { userType } from "../node.js";

export const userQuery = {
  type: userType,
  args: {
    id: globalIdField()
  },
  resolve: async (_, args)=>{
    const { id:UserId }=fromGlobalId(args.id);
    const User=await getUserById(UserId);
    User.user_id=UserId;
    return User;
  }
}