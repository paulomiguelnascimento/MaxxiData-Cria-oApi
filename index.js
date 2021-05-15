
const express = require('express')
const routes = require('./config/routes')

const app = express();

routes.use(express.json());
app.use(routes)



app.listen(8080,  ()  =>{
    console.log("servidor iniciado na porta 8080: http://localhost:8080/");

} );


