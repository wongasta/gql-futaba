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
import {commentType} from "../node.js";
import {dbAddComment, getComments} from "../database.js";

export const addComment = mutationWithClientMutationId({
  name: 'addPost',
  outputFields: {
    user: { type: commentType }
  },
  inputFields: {
    user: globalIdField(),
    post: globalIdField(),
    comment_content: GraphQLNonNull(GraphQLString),
    image_url: GraphQLString
  },
  mutateAndGetPayload: (args)=>{
    return new Promise(async (resolve, reject)=>{
      const postId = await dbAddComment(args);
      resolve(getComments(postId));
    });
  }
})