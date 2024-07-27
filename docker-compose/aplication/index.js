const express = require("express");
const Redis = require("ioredis");
const port = 3000
const redis = new Redis(6379, "redis");

const app = express();

app.get("/", async function(req, res){  
    let total = await redis.get("total");
    total = Number(total) + 1;

    await await redis.set("total",  total);

    return res.send(`Está página já foi aberta ${total} vezes.`)
});

app.listen(port, ()=> console.log("Executando na porta 3000"))