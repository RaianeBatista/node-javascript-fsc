//export class Product {
//expotando class com ES Module
//   constructor(id, name, price) {
//     this.name = name;
//     this.price = price;
//     this.id = id;
//   }
//   getInfo() {
//     return `ID do produto: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`;
//   }
// }

export function createProduct(id, name, price) {
  return new Product(id, name, price);
}

//const productPrice = 7000;

// export const productPrice = 200;

// Outra forma de exportação:
//export default productPrice;

// Exportando função
// export default function () {
//   console.log("Hello World!");
// }

// Exportando objetos
// export default {
//   productPrice,
//   createProduct,
//   Product,
// };

// module.exports = {
//   createProduct,
//   Product,
//   productPrice,
// };

export class Product {
  //expotando class com ES Module
  constructor(id, name, price) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
  getInfo() {
    return `ID do produto: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`;
  }
}

const productPrice = 200;

export default productPrice;

//export default Product;
