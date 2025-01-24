const express = require("express");
const products = require("./data/products");
const reviews = require("./data/reviews");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log("Middleware is running");
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
});

app.get("/api/products", (req, res) => {
    res.send("Hello Express");
});

app.get("/api/reviews", (req, res) => {
    res.send("Hello Express");
});

app.put("./api/reviews", (req, res) => {
    req.body;
})

app.delete("./api/reviews", (req, res) => {

})
