const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send('API Running');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});