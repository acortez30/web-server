import { dirname } from 'path';
import { fileURLToPath } from 'url'; // 👈 ¡Esta es la que falta!
import hbs from 'hbs' 
import express from 'express';
const app = express();
const port = 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

//HANDLE BARS
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'Alan Cortez',
        titulo:'Curso node'
    });
})
app.get('/hola-mundo',(req,res)=>{
    res.send('Hello World en su ruta');
})
// app.get('/*',(req,res)=>{
//     res.sendFile( __dirname + '/public/404.html')
// })
app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre:'Alan Cortez',
        titulo:'Curso node'
    });
})
app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre:'Alan Cortez',
        titulo:'Curso node'
    });
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})