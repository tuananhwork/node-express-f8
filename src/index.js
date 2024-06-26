const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const db = require('./config/db');
const route = require('./routes');
const methodOverride = require('method-override');

db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride('_method'));

// HTTP Logger
// app.use(morgan('combined'));

// Template engine
app.engine('handlebars', engine({ defaultLayout: 'main' }));

app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`Blog app listening on http://127.0.0.1:${port}`);
});
