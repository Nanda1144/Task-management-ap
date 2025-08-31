require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use('/auth', require('./routes/auth'));
app.use('/tasks', require('./routes/tasks'));

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('DB connected');
});

module.exports = app;
