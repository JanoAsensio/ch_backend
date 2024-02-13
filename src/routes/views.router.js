import express from 'express';
const router = express.Router();

const users = [
  {
    name: 'Jano',
    last_name: 'Asensio',
    age: 36,
    email: 'jano.a@hotmail.com',
    phone: 1122334455,
    role: 'admin',
  },
  {
    name: 'David',
    last_name: 'Acerbo',
    age: 36,
    email: 'david.a@gmail.com',
    phone: 1166778899,
    role: 'user',
  },
  {
    name: 'Manuel',
    last_name: 'Asensio',
    age: 31,
    email: 'manuel.a@gmail.com',
    phone: 1122446688,
    role: 'admin',
  },
  {
    name: 'Americo',
    last_name: 'Valdazo',
    age: 37,
    email: 'americo.v@gmail.com',
    phone: 1133557799,
    role: 'user',
  },
  {
    name: 'Juan Pablo',
    last_name: 'Videla',
    age: 41,
    email: 'juan.v@gmail.com',
    phone: 1188449955,
    role: 'user',
  },
];

const food = [
  { name: 'Hamburguesa', price: '1000' },
  { name: 'Pizza', price: '1500' },
  { name: 'Fideos', price: '900' },
  { name: 'Asado', price: '2000' },
  { name: 'Ensalada', price: '750' },
];

router.get('/', (req, res) => {
  const indice = Math.floor(Math.random() * users.length);

  res.render('index', {
    user: users[indice],
    style: 'index.css',
    isAdmin: users[indice].role === 'admin',
    food,
  });
});

router.get('/register', (req, res) => {
  console.log(users)
  res.render('register')});

router.post('/user', (req, res) => {
  const { name, email, password } = req.body;

  users.push({name, email, password})
  res.render('register', {registroExitoso: true})
});

export default router;
