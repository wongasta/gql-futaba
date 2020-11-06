import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString, GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import {
  globalIdField,
  mutationWithClientMutationId,
} from 'graphql-relay';
import {postType} from "../node.js";
import {dbAddPost, getPostById} from "../database.js";

export const addPost = mutationWithClientMutationId({
  name: 'addPost',
  outputFields: {
    post: { type: postType }
  },
  inputFields: {
    user: {type: GraphQLNonNull(GraphQLID)},
    title: {type:GraphQLNonNull(GraphQLString)},
    post_content: {type:GraphQLNonNull(GraphQLString)},
    image_url: {type:GraphQLString}
  },
  mutateAndGetPayload: (args)=>{
    return new Promise(async (resolve, reject)=>{
      const result = await dbAddPost(args);
      if((result instanceof Error)) return resolve(result);
      resolve({
        post: getPostById(result)
      });
    });
  }
})