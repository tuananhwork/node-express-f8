const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP Logger
// app.use(morgan('combined'));

// Template engine
app.engine('handlebars', engine({ defaultLayout: 'main' }));

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/news', (req, res) => {
  res.render('pages/news');
});

app.get('/search', (req, res) => {
  console.log('\n\n', req.query);
  res.render('pages/search');
});

app.get('/login', (req, res) => {
  res.render('pages/login', { layout: 'account', pageTitle: 'Login to AnhCBT' });
});

app.get('/register', (req, res) => {
  res.render('pages/register', { layout: 'account', pageTitle: 'Register to AnhCBT' });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('');
});

app.listen(port, () => {
  console.log(`Blog app listening on http://anhcbt.com:${port}`);
});
