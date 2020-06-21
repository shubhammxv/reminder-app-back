const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const reminderRoutes = require('./app/routes/reminder');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use('/remind', reminderRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
})

const port = process.env.PORT || 8080

console.log("Starting Server");
app.listen(port, () => console.log("Server started at Port", port));
