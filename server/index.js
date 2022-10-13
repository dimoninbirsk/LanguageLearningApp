require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mysql = require("mysql2");

const PORT = process.env.PORT || 5000;
const app = express()

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
    password: "dimoninbirsk1!"
  });

const start = async () =>{
    connection.connect(function(err){
        if (err) {
          return console.error("Ошибка: " + err.message);
        }
        else{
          console.log("Подключение к серверу MySQL успешно установлено");
        }
     });
    try{
        app.listen(PORT, ()=> {
            console.log(`Server start on PORT = ${PORT}`)
        })
    }
    catch (e) {
        console.log(e);
    }
}

start()