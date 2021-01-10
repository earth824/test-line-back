const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req,res,next) => {
  res.status(200).json({message: 'Hello world'});
});

app.get('/line/init', (req, res,next) => {
  res.status(200).json({message: 'Hello line callback'});
});

app.listen(8000, () => {
  console.log('Server running on port 8000');
});