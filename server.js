const express = require("express");
const products = require("./data/products");
const reviews = require("./data/reviews");
const users = require("./data/users");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log("Middleware is running");
    next();
});

app.get("/", (req, res) => {
    res.send("Base");
})

// Read
app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/api/reviews", (req, res) => {
    res.json(reviews)
});

app.get("/api/users", (req, res) => {
    res.json(users)
});

// Update
app.put("/api/products", (req, res) => {
    console.log("Update")
});

// Create
app.post("/api/products", (req, res) => {
    console.log("Post");
});

// Delete
app.delete("/api/reviews", (req, res) => {
    console.log("Delete");
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
});