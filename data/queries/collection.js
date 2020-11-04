import {
  GraphQLObjectType,
} from 'graphql';
import { postsQuery } from './posts.js';
import { postQuery } from './post.js';

export default new GraphQLObjectType({
  name: 'QueryType',
  description: 'Root query type',
  fields: {
    posts: postsQuery,
    post: postQuery
  }
})