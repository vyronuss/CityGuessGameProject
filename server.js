const express = require("express");
const cors = require("cors");

const app = express();
const APP_ID = "";

app.use(cors()); // <-- THIS fixes the problem

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get("/wolfram", async (req, res) => {
    const query = req.query.q;

    const url = `https://api.wolframalpha.com/v2/query?input=${encodeURIComponent(query)}&appid=${APP_ID}&output=JSON`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
});


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
