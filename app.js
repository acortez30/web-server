import { dirname } from 'path';
import { fileURLToPath } from 'url'; // 👈 ¡Esta es la que falta!
import express from 'express';
const app = express();
const port = 8080;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('Hello World sin ruta');
})
app.get('/hola-mundo',(req,res)=>{
    res.send('Hello World en su ruta');
})
// app.get('/*',(req,res)=>{
//     res.sendFile( __dirname + '/public/404.html')
// })
app.get('/generic',(req,res)=>{
    res.sendFile( __dirname + '/public/generic.html')
})
app.get('/elements',(req,res)=>{
    res.sendFile( __dirname + '/public/elements.html')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})