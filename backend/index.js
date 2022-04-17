const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const connectDB = require('./config/db')
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/login', require('./routes/login/loginRoute'));
app.use('/lostandfound', require('./routes/lostAndFound/lostAndFoundRoute'));

app.listen(port, () => console.log(`Server started on port ${port}`));
