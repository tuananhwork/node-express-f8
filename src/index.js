const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', engine());

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/news', (req, res) => {
  res.render('pages/news');
});

app.listen(port, () => {
  console.log(`Blog app listening on http://anhcbt.com:${port}`);
});
