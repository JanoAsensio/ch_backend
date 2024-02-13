import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express()

const randomInteger = Math.floor(Math.random() * 5);

let users = [{
    name: 'Jano',
    last_name: 'Asensio',
    age: 36,
    email: 'jano.a@hotmail.com',
    phone: 1122334455
},{
    name: 'David',
    last_name: 'Acerbo',
    age: 36,
    email: 'david.a@gmail.com',
    phone: 1166778899
},{
    name: 'Manuel',
    last_name: 'Asensio',
    age: 31,
    email: 'manuel.a@gmail.com',
    phone: 1122446688
},{
    name: 'Americo',
    last_name: 'Valdazo',
    age: 37,
    email: 'americo.v@gmail.com',
    phone: 1133557799
},{
    name: 'Juan Pablo',
    last_name: 'Videla',
    age: 41,
    email: 'juan.v@gmail.com',
    phone: 1188449955

}]

// app.get(`/${randomInteger}`, (req, res)=>{
//     let pos = req.params
// })

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
    res.status(200).json(users[randomInteger])

    res.render('index', users)
})

const server = app.listen(8080, ()=> console.log('Server running in port 8080'))
