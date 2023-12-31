const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js');

const app = express();

const PORT = process.env.PORT || 5001;
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});