const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('<h1>Hello world AnhCBT</h1>'));

app.listen(port, () => {
  console.log(`Blog app listening on http://anhcbt.com:${port}`);
});
