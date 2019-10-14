const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('working')

});

const PORT = 8080;
app.listen(PORT, () => {
   console.log(`the application is running on Port ${PORT}`);
});