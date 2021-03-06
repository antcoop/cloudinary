// NODE
const path = require('path');
const { existsSync, mkdirSync } = require('fs');

// THIRD PARTY
const express = require('express');
require('dotenv').config();


// HOUSEKEEPING
const PORT = process.env.PORT || 5100;
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb' }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// LISTENER
app.listen(PORT, () => {
  console.log('APP running on… http://localhost:%s', PORT);
  var dir = path.join(__dirname, 'tmp/');
  if (!existsSync(dir)) mkdirSync(dir, 0744);
});