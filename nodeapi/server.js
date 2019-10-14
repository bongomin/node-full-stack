const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const db = require('./config/database')
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Db onnection
mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
   .then(() => console.log('MongoDB Connected...'))
   .catch(err => console.log(err));

// in case of connection err
mongoose.connection.on("error", err => {
   console.log(`Db connection error : ${err.message}`);
})

const app = express();
//bringin in routes

const postRoutes = require('./routes/post');

// use middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());


app.use('/', postRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log(`the application is running on Port ${PORT}`);
});