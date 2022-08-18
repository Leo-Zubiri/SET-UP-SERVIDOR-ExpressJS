const express = require('express');
const app = express();

// Si hay una petición get a la raiz del proyecto
app.get('/',(req,res) => {  
    res.send('Hello world');
})

app.get('/about',(req,res) => {  
    res.send('<h1>About me</h1>');
})

// --------------------------------------------------
app.use(express.json());

app.post('/user',(req,res) => {
    console.log(req.body);
    res.send('POST Recibido');
})

app.all('/user',(req,res,next) => {
    console.log('Petición a User');
    res.send('Realizaste una petición a la ruta user');
    next();
})

// --------------------------------------------------

app.post('/user/:id',(req,res) => {
    console.log(req.params);
    res.send('POST Recibido');
})

// --------------------------------------------------

app.get('/test',(req,res) => {  
    res.send('<h1>Test Método GET</h1>');
})

app.post('/test',(req,res) => {  
    res.send('<h1>Test Método POST</h1>');
})

app.put('/test',(req,res) => {  
    res.send('<h1>Test Método PUT</h1>');
})

app.delete('/test',(req,res) => {  
    res.send('<h1>Test Método DELETE</h1>');
})

// --------------------------------------------------


app.listen(3000,() => {  
    console.log('Server on port 3000');
})