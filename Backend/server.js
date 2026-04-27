require('dotenv').config()

const express = require('express')
const connectDB = require('./src/config/database')
const app = require('./src/app')

connectDB()

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})