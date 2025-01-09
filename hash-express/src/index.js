const express = require('express');
const bcrypt = require('bcrypt');
let salt = bcrypt.genSaltSync(5);

let pass = "admin#1234";

console.log(`salt : ${salt}`);
let hash = bcrypt.hashSync(pass, 10);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`password awal : ${pass}`);
    console.log(`hash password : ${hash}`);
    console.log(`Example app listening at ${port}`);
});