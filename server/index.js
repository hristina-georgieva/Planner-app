require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const noteRoute = require('./routes/note.route.js')

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/notes', noteRoute);

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/';

app.get('/', (req, res) => {
  res.send('Hello from the server now');
});

mongoose.connect(uri)
.then(() => {
  console.log('Connected to the database!');
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  })
})
.catch(() => {
  console.log('Connection failed!');
});

