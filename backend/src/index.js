const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


mongoose.connect('mongodb+srv://abe_seguros:abe_seguros@covid19-tkcou.mongodb.net/abe_database?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.listen(3333);