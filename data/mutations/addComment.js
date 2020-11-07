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
  toGlobalId,
  mutationWithClientMutationId,
} from 'graphql-relay';
import {CommentEdge} from "../node.js";
import {dbAddComment, getCommentById} from "../database.js";

export const addComment = mutationWithClientMutationId({
  name: 'addComment',
  outputFields: {
    commentEdge: { type: CommentEdge }
  },
  inputFields: {
    user: {type: GraphQLNonNull(GraphQLID)},
    post: {type: GraphQLNonNull(GraphQLID)},
    comment_content: {type: GraphQLNonNull(GraphQLString)},
    image_url: {type: GraphQLString}
  },
  mutateAndGetPayload: (args)=>{
    return new Promise(async (resolve, reject)=>{
      const result = await dbAddComment(args);
      if(result instanceof Error) return resolve(result);
      const CommentId=toGlobalId('Comment',result);
      resolve({
        commentEdge: {
          cursor: CommentId,
          node: getCommentById(result)
        }
      });
    });
  }
})