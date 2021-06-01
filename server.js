const express = require('express')
const app = express();
const route=require('./routes/route');
const db=require('./db/db');
const port = process.env.port || 3000;

app.use(route);
app.listen(port, () => {
  console.log(` App listening at http://localhost:${port}`);
  db.connect();
});