require('dotenv').config()

const express = require('express')
const connectDB = require('./src/config/database')
const app = require('./src/app')

connectDB()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});