const mysql2 = require('mysql2');
const express = require('express');
const app = express();
const dbconnection = mysql2.createPool(
 {
    user:'nata',
    database:'naty-db',
    host:'localhost',
    password:'123456'
    
 }
);


module.exports = dbconnection.promise();





