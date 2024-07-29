import express from 'express'
import * as dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express';
/** Interfaces & Types */
import type { Express } from 'express'
/** Config */
import { appDataSource } from './config/database';
/** Graphql Modules */
import { typesDefs } from './app/schemas'
import { resolversDefs } from './app/resolvers'

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.EXPRESS_PORT ?? '0');
const server = new ApolloServer({ 
    typeDefs: typesDefs,
    resolvers: resolversDefs,
});

app.listen(port, async () => {
    await server.start();
    server.applyMiddleware({ app });
    await appDataSource.initialize();
    console.log(`[Server]`, `Server running on port ${port}`);
})