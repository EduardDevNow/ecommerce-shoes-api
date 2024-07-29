import express from 'express'
import * as dotenv from 'dotenv'
import type { Express } from 'express'

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.EXPRESS_PORT ?? '0');

app.listen(port, () => {
    console.log(`[Server]`, `Server running on port ${port}`);
})