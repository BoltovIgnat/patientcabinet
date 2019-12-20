const express = require('express');
const cors = require('cors');
const randtoken = require('rand-token');

const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true }));

let token;

server.post('/info', (req, res) => {
  res.send({
    role: 'admin',
    status: 200
  });
});

server.post('/auth', (req, res) => {
  token = randtoken.generate(16);
  res.send({
    role: 'admin',
    token
  });
});

server.post('/addPatient', (req, res) => {
  token = randtoken.generate(16);
  res.send({
    status: 200,
    successText: 'Пользователю отправлен код для подтверждения номера телефона',
    error: {
      text: 'убличная сессия для работы с сервером истекла',
      code: 21
    }
    // token
  });
});

server.post('/signout', (req, res) => {
  token = null;
  res.send({
    role: 'layout'
  });
});

server.listen(8080, 'localhost', () => console.log('The server has been started...'));
