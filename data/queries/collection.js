import {
  GraphQLObjectType,
} from 'graphql';
import { nodeField } from "../node.js";
import { postsQuery } from './posts.js';
import { postQuery } from './post.js';
import { userQuery } from "./user.js";

export default new GraphQLObjectType({
  name: 'QueryType',
  description: 'Root query type',
  fields: {
    node: nodeField,
    posts: postsQuery,
    post: postQuery,
    user: userQuery
  }
})