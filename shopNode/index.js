const express = require("express");
const cors = require("cors");
const { readNode, createNode, updateNode, deleteNode } = require("./utils");

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Shopping");
});

app.get("/products", (req, res) => {
  const products = readNode();
  res.send(products);
});

app.post("/products", (req, res) => {
  const product = req.body;

  createNode(product);

  res.status(201).send("Successfully Created");
});

app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const node = req.body;

  updateNode(id, node);

  res.send("Successfully updated");
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  deleteNode(id);

  res.send("Successfully deleted");
});

app.listen(PORT, () => {
  console.log(`Application server is running at http://localhost:${PORT}`);
});
