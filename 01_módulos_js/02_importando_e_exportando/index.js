//console.log("Welcome to FSC!");
//const createProduct = require("./products");
const { createProduct, Product, productPrice } = require("./products"); //Destructuring

require("./hello");

//const product = createProduct(1, "MackBook", 1200);
const product = createProduct(1, "MackBook", productPrice);

const product2 = new Product(2, "Celular Motorolla", 1500);

console.log(product.getInfo());
console.log(product2.getInfo());
