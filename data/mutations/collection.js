import {
  GraphQLObjectType,
} from 'graphql';
import {addUser} from "./addUser.js";
import {addPost} from "./addPost.js";
import {addComment} from "./addComment.js";

export default new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation type',
  fields: {
    add_user: addUser,
    add_post: addPost,
    add_comment: addComment
  }
});