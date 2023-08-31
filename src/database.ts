import {Pool} from 'pg';

export const pool= new Pool({
    user:'postgres',
    host:'localhost',
    password:'203467',
    database:'soa',
    port:5432
});