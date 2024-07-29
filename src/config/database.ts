import * as dotenv from 'dotenv';
import path from 'path';
import { DataSource } from 'typeorm';

dotenv.config();

export const appDataSource: DataSource = new DataSource({
    type: 'mysql',
    host: process.env.EXPRESS_DB_HOST ?? 'localhost',
    port: parseInt(process.env.EXPRESS_DB_PORT ?? '3306'),
    username: process.env.EXPRESS_DB_USER ?? 'root',
    password: process.env.EXPRESS_DB_PASSWORD ?? '',
    database: process.env.EXPRESS_DB_DATABASE ?? '',
    synchronize: true,
    logging: false,
    entities: [path.join(__dirname, '../app/models/**/*.ts')]
})