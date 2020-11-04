import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import gqlSchema from './data/schema.js';

const PORT = process.env.PORT || 3000;
const server = express();

server.use('/graphql', graphqlHTTP({
  schema: gqlSchema,
  graphiql: true,
}));


server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});