const express = require("express");
const Redis = require("ioredis");

const port = 3000;
const redis = new Redis(6379, "redis");
const app = express();

app.get("/", async (req, res)=>{
    let total = await redis.get("total");

    total = Number(total) + 1;

    await await redis.set("total", total);

    res.send(`Está página já aberta ${total} vezes`);
});

app.listen(port, ()=> console.log("Express está rodando na porta " + port))