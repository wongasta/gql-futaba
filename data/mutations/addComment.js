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
import {commentType} from "../node.js";
import {dbAddComment, getCommentById} from "../database.js";

export const addComment = mutationWithClientMutationId({
  name: 'addComment',
  outputFields: {
    comment: { type: commentType }
  },
  inputFields: {
    user: {type: GraphQLNonNull(GraphQLID)},
    post: {type: GraphQLNonNull(GraphQLID)},
    comment_content: {type: GraphQLNonNull(GraphQLString)},
    image_url: {type: GraphQLString}
  },
  mutateAndGetPayload: (args)=>{
    return new Promise(async (resolve, reject)=>{
      const postId = await dbAddComment(args);
      resolve({
        comment: getCommentById(postId)
      });
    });
  }
})