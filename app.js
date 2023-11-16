const express = require('express');
const cors = require('cors');
const path= require('path'); // ruta de un html 

//index del router 
const router = require('./src/routes');

const {json, urlencoded} = express;
const app = express();
exports.app = app;
const port = process.env.PORT || 8080;
 
app.use(json());
app.use(urlencoded({extended: false}));

const corsOptions ={
    origin:'*',
    optionsSuccessStatus: 200

}
// cualquier origen puede acceder al microservicio
app.use(cors(corsOptions));

app.use(router);

app.use('/home',(req,res)=>{
    res.sendFile(path.join(__dirname+'/src/html/index.html'));
})

app.use('/',(req,res)=>{
    res.send("microservicio 1 y version 1");
})

app.listen(port,()=>{
    console.log(`escuchando en el puerto ${port}`);
})