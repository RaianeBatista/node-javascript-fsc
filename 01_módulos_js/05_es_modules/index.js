//Importando tipo Common Json
//const { createProduct, Product, productPrice } = require("./products"); //Destructuring

// Importando tipo ES Module - Sintaxe mais simples e mais Moderna
// import { createProduct, Product, productPrice } from "./product.js";

// const product = createProduct(1, "MackBook", productPrice);

// const product2 = new Product(2, "Celular Motorolla", 1500);

// console.log(product.getInfo());
// console.log(product2.getInfo());

//Importação padrão => import default
// import something from "./product.js";
// console.log(something);

// import productPrice from "./product.js";

// console.log(productPrice());

// import product from "./product.js";

// console.log(product.productPrice)

//Importação com export default e destructuring
//import productPrice, { Product, createProduct } from "./product.js";

//import { filter } from "lodash";

import lodash from "lodash"; // Módulo incompatível com ES Module
//const { filter } = lodash;
import path from "path"; //Módulo nativo do node

lodash.filter();

import productPrice, { Product, createProduct } from "./product.js";

// Importando em uma única variável
// import * as producModule from "./product.js";

// producModule.Product

const product = createProduct(1, "MackBook", productPrice);

const product2 = new Product(2, "Celular Motorolla", 1500);

console.log(product.getInfo());
console.log(product2.getInfo());
