import mysql from "mysql2/promise";

const insertIntoDB = async () =>{
    const connection =await mysql.createConnection({
        host: "sql3.freesqldatabase.com",
        user : "sql3456011",
        password :"BrS1hTLnJM",
        database :"sql3456011",
        port: 3306
    })
    try{
         var h=await connection.query("select * from details");
        console.log(h[0]);
        console.log("entered");
        return h[0];
    }
    catch(e){
        console.log(e);

    }
}
export default insertIntoDB;
//console.log(ans+" hello");
