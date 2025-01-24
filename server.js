const express = require("express");
const products = require("./data/products");
const reviews = require("./data/reviews");
const users = require("./data/users");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log("Middleware is running");
});

// Read
app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/reviews", (req, res) => {
    res.json(reviews)
});

app.get("/api/users", (req, res) => {
    res.json(users)
});

// Update
app.put("./api/products", (req, res) => {
    req.body;
});

// Create
app.post("./api/products", (req, res) => {
    req.body;
})

// Delete
app.delete("./api/reviews", (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
});