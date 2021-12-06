import { createPool } from 'mysql2';

const pool=createPool({
    host: "sql3.freesqldatabase.com",
        user : "sql3456011",
        password :"BrS1hTLnJM",
        database :"sql3456011",
        port: 3306
})


export default pool;