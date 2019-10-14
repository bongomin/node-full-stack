const express = require('express');

const app = express();
//bringin in routes

const { getPosts } = require('./routes/post');


app.get('/', getPosts);

const PORT = 8080;
app.listen(PORT, () => {
   console.log(`the application is running on Port ${PORT}`);
});