import {
  GraphQLSchema
} from 'graphql';
import queryType from './queries/collection.js';
import mutationType from './mutations/collection.js';

export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});