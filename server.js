const express = require("express");
const products = require("./data/products");
const reviews = require("./data/reviews");
const users = require("./data/users");

const app = express();
const PORT = 3000;

function findProduct(id) {
    return products.find((p, i) => {
        if (p.id == id) return { product: p, index: i };
    });
}

app.use(express.json());
app.use((req, res, next) => {
    console.log(`Request Received: ${req.method} ${req.url}`);
    next();
});

app
    .route("/api/users")
    .get((req, res) => res.json(users))
    .post((req, res) => {
        const { name, username, email } = req.body;
        if (name && username && email) {
            if (users.find((u) => u.username === username)) {
                res.status(400).json({ error: "Username Already Taken" });
                return;
            }
            const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
            const user = { id, name, username, email };
            users.push(user);
            res.status(201).json(user);
        } 
        else 
            res.status(400).json({ error: "Insufficient Data" });
    });

app
    .route("/api/product/:id")
    .get((req, res, next) => {
        const { product } = findProduct(req.params.id) || {};
        if (product) res.json(product);
        else next();
    })
    .patch((req, res, next) => {
        const result = findProduct(req.params.id);
        if (result) {
            const { index } = result;
            Object.assign(products[index], req.body);
            res.json(products[index]);
        } 

        else 
            next();
    })
    .delete((req, res, next) => {
        const result = findProduct(req.params.id);
        if (result) {
            const { product, index } = result;
            products.splice(index, 1);
            res.json(product);

        } 
        else 
            next();
    });

app.get("/api/reviews", (req, res) => res.json(reviews));

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
});