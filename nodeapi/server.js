const express = require('express');
const morgan = require('morgan');

const app = express();
//bringin in routes

const { getPosts } = require('./routes/post');

// use middleware
app.use(morgan("dev"));


app.get('/', getPosts);

const PORT = 8080;
app.listen(PORT, () => {
   console.log(`the application is running on Port ${PORT}`);
});