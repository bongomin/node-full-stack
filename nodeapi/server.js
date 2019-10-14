const express = require('express');
const morgan = require('morgan');

const app = express();
//bringin in routes

const postRoutes = require('./routes/post');

// use middleware
app.use(morgan("dev"));


app.use('/', postRoutes);

const PORT = 8080;
app.listen(PORT, () => {
   console.log(`the application is running on Port ${PORT}`);
});