const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString, GraphQLInt,
  GraphQLBoolean,
} = require('graphql');
const {
  globalIdField,
  mutationWithClientMutationId,
} = require('graphql-relay');
import {postType} from "../node.js";
import {dbAddPost, getPostById} from "../database.js";

export const addPost = mutationWithClientMutationId({
  name: 'addPost',
  outputFields: {
    user: { type: postType }
  },
  inputFields: {
    user: globalIdField(),
    title: GraphQLNonNull(GraphQLString),
    post_content: GraphQLNonNull(GraphQLString),
    image_url: GraphQLString
  },
  mutateAndGetPayload: (args)=>{
    return new Promise(async (resolve, reject)=>{
      const postId = await dbAddPost(args);
      resolve(getPostById(postId));
    });
  }
})