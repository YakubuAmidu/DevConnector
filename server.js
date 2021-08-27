const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send('API Running');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
