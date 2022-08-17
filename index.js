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