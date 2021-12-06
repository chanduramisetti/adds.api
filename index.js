import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

import pool from "./server2.js";
import cors from 'cors';

const app=express();
const p=5500;

app.use(bodyParser.json());
app.use(cors());




app.get('/users', (req,res) =>{
    pool.query(`select * from details`,(err,result,field)=>{
        if(err)
        return console.log(err);
        res.send(result);
    })
    
    console.log("server reached");
})
app.post('/users',(req,res) =>{
    
    const d1=req.body.name;
    const d2=req.body.add;
    const d3=req.body.Email;
    pool.query("INSERT INTO `details` (`name`, `add`,`Email`) VALUES (?,?,?)",[d1,d2,d3],(err,result,field) =>{
        if(err)
        return console.log(err);
        res.send(result);
        console.log("inserted");
    })
})
app.post('/add',(req,res) =>{
    
    const d1=req.body.name;
    const d2=req.body.add;
    const d3=req.body.Email;
    const d4=req.body.para;
    pool.query("INSERT INTO `details` (`name`, `add`,`Email`,`para`) VALUES (?,?,?,?)",[d1,d2,d3,d4],(err,result,field) =>{
        if(err)
        return console.log(err);
        res.send(result);
        console.log("inserted");
    })
})
app.put('/users',(req,res) =>{
    const d1=req.body.name;
    const d2=req.body.email;
    const d3=req.body.para;
    const d4=req.body.color;
    pool.query("Update  `details`  set `para`=? ,`color`=?  where name= ? and email=?",[d3,d4,d1,d2],(err,result,field) =>{
        if(err)
        return console.log(err);
        res.send(result);
        console.log("updated");
    })
})
app.put('/comment',(req,res) =>{
    const d1=req.body.name;
    const d2=req.body.comment;
    const d3=req.body.email;
    pool.query("Update  `details`  set `comment`=?   where name= ? and email=?",[d2,d1,d3],(err,result,field) =>{
        if(err)
        return console.log(err);
        res.send(result);
        console.log("updated  "+d2);
    })
})
app.delete('/delete',(req,res) =>{
    pool.query("delete from `details`",(err,result,field) =>{
        if(err)
        return console.log(err);
        res.send(result);
        console.log("deleted");
    })
})
app.delete('/users',(req,res) =>{
    const d1=req.body.name;
    pool.query("delete from `details` where name=?",[d1],(err,result,field) =>{
        if(err)
        return console.log(err);
        res.send(result);
        console.log("deleted");
    })
})


app.listen(p, ()=>{
    console.log("Server Running");
})
