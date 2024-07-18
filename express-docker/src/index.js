const express = require("express");
const os = require("os");

const app = express();
const port = 3000;

app.get("/", (req, res)=> {
    res.send(`Hello World! ${os.type()} ${os.release()} ${os.platform()}`);
});

app.listen(port, ()=> {
    console.log("Apenas um teste simples!");
});