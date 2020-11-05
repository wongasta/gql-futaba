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
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
} from 'graphql-relay';
import {commentType, postType} from "../node.js";
import {dbAddComment, getPostById, getCommentById} from "../database.js";

export const addComment = mutationWithClientMutationId({
  name: 'addComment',
  outputFields: {
    post: { type: postType },
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
      const commentId = await dbAddComment(args);
      const { id: postId }=fromGlobalId(args.post);
      resolve({
        post: getPostById(postId),
        comment: getCommentById(commentId)
      });
    });
  }
})