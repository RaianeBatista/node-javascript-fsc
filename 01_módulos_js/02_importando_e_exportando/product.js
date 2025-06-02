class Product {
  constructor(id, name, price) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
  getInfo() {
    return `ID do produto: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`;
  }
}

//Módulo é essa função, que cria a classe createProduct
function createProduct(id, name, price) {
  return new Product(id, name, price);
}

const productPrice = 7000;

// module.exports = createProduct;

//Exportando um objeto com várias propriedades
module.exports = {
  createProduct,
  Product,
  productPrice,
};
