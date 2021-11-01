const express = require('express');
const app = express();
const tree = require('./fetchCategories.js');
const port = 8080;

app.get('/fetchTree', (req,res,next) => {
    res.send(tree);
})

//Listening to port 8080
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})