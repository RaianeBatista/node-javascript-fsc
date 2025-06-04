// Promise.allSettled
// Quando usado, independente se falhar ou naõ alguma das promisses,
//  o programa vai rodar com sucesso.
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
    const results = await Promise.allSettled([
      loadProducts(),
      loadCategories(),
      loadUsers(),
    ]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

init();
