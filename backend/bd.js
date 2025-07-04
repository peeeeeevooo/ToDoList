import {Pool} from 'pg'

const pool = new Pool({
    user: "postgres",
    password: "2614",
    host: "localhost",
    port: 5432,
    database: "todolist"
})

export default pool;