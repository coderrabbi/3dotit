const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { readdirSync } = require('fs');
require('dotenv').config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// db
mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.DB_SERVER)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => console.error(err));

// routes
readdirSync('./routes').map((path) => app.use('/api', require(`./routes/${path}`)));

// server
const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT, () => console.log(`server is listening at ${PORT}`));
