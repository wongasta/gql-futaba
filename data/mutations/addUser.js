const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString, GraphQLInt,
  GraphQLBoolean,
} = require('graphql');
const { getVideoById, getVideos, createVideo } = require('./src/data');
const {
  mutationWithClientMutationId,
} = require('graphql-relay');
import {userType} from "../node";
import {dbAddUser, getUserById} from "../database";

export const addUser = mutationWithClientMutationId({
  name: 'addUser',
  outputFields: {
    user: { type: userType }
  },
  mutateAndGetPayload: (args)=>{
    return new Promise(async (resolve, reject)=>{
      const userId = await dbAddUser(args);
      resolve(getUserById(userId));
    });
  }
})