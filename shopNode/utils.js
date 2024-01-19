const fs = require("fs");

generateId = () => {
  return Math.random().toString(16).slice(2);
};

const readNode = () => {
  const json = fs.readFileSync("json/products.json", "utf-8");
  const data = JSON.parse(json);
  return data;
};

const createNode = (node) => {
  const json = fs.readFileSync("json/products.json", "utf-8");
  const previousData = JSON.parse(json);

  const id = generateId();

  previousData.push({...node, id: id});
  fs.writeFileSync("json/products.json", JSON.stringify(previousData));
};

const updateNode = (id, node) => {
  const json = fs.readFileSync("json/products.json", "utf-8");
  const previousData = JSON.parse(json);
  const nodeToUpdate = previousData.find((element) => element.id === id);

  const newArray = previousData.filter((element) => element.id !== id);

  newArray.push({ ...nodeToUpdate, ...node });

  fs.writeFileSync("json/products.json", JSON.stringify(newArray));
};

const deleteNode = (id) => {
  const json = fs.readFileSync("json/products.json", "utf-8");
  const previousData = JSON.parse(json);
  const newArray = previousData.filter((element) => element.id !== id);

  fs.writeFileSync("json/products.json", JSON.stringify(newArray));
};

module.exports = { readNode, createNode, updateNode, deleteNode };
