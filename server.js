const express=require('express');
const serverConfig=require('./configs/server.config');
const mongoose =require('mongoose');
const dbConfig=require('./configs/db.config')




const app=express();
/**
 * Logic to connect MongdB and create an ADMIN user
 * Need to have mongodba up and running in our local machine
 */
mongoose.connect(dbConfig.DB_URL);
const db=mongoose.connection;
db.on("error",()=>{
    console.log("error while connecting to datatbase")
});
db.once("open",()=>{
    console.log("database is connected");
})
  

app.listen(serverConfig.PORT,()=>{
    console.log(`sever started on the port number ${serverConfig.PORT}`);
})