import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString, GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import {userType} from "../node.js";
import {dbAddUser, getUserById} from "../database.js";

export const addUser = {
  type: userType,
  args: {},
  resolve: (_, args)=>{
    return new Promise(async (resolve, reject)=>{
      const userId = await dbAddUser(args);
      resolve(getUserById(userId));
    });
  }
};