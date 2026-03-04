const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

mongoose.connect('mongodb://localhost:27017/jwt_security')
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello' });
});

const UserRoute = require('./routes/routes');
app.use('/', UserRoute);