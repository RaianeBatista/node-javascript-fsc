// Promises.all executa várias promises simultaneamente
// No Promise.all, quando uma das promises falha, o programa não executa, apresentando
// somente a pensagem do reject
// Se uma falha, todas indenpendente se forem executadas, irão falhar
const loadProducts = () => {
  //return new Promise((resolve) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Mackbook", price: 900 });
      //reject("Ocorreu um erro!");
    }, 3000);
  });
};

const loadCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({ id: 1, name: "Notebooks" });
      reject("Ocorreu um erro.");
    }, 3000);
  });
};

const loadUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Raiane Batista", age: 19 });
    }, 3000);
  });
};

const init = async () => {
  //   const products = await loadProducts();
  //   const categories = await loadCategories();
  //   const users = await loadUsers();

  try {
    const [products, categories, users] = await Promise.all([
      loadProducts(),
      loadCategories(),
      loadUsers(),
    ]);
    console.log({ products, categories, users });
  } catch (error) {
    console.log(error);
  }
};

init();
