const express = require('express');
const app = express();
const morgan = require('morgan');

function logger(req,res,next) {
    console.log(`Request a ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

app.set('appName','Practicando Express');
app.set('view engine','ejs');


app.get('/ejs', (req,res) => {
    const data = [
        {name: 'Leo', lastname: 'Zubiri'},
        {name: 'Elideth', lastname: 'Zubiri'},
        {name: 'Leoziel', lastname: 'Zubiri'}
    ]
    res.render('index.ejs',{people: data});
});
console.log(app.get('appName'));
// Algun tipo de configuracion para el logger
app.use(morgan('dev'));

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
app.use(express.static('public'));

// --------------------------------------------------


app.listen(3000,() => {  
    console.log('Server on port 3000');
})