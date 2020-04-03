const express = require("express");
const mysql = require("mysql");
const connection = require("./database");
const route = require("./routes/index.routes");

//Parsear la info en json
const bodyParse = require("body-parser");
//Obtener un puerto
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParse.json());

//Routes
app.use(route);


//check connect
connection.connect(error =>{
    if (error) throw error;
    console.log("Database connected");
});

app.listen(PORT, () => {console.log(`Server on port ${PORT}`);
})