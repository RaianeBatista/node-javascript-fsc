// Todas essas funções levam 9 segundos para serem executadas
// o que não é indicado, pois nesse caso, as categorias são independentes uam da outra
// Podendo ser executadas sem depender da execução de outras

const loadProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Mackbook", price: 900 });
    }, 3000);
  });
};

const loadCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Notebooks" });
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
  const products = await loadProducts();
  const categories = await loadCategories();
  const users = await loadUsers();

  console.log({products, categories, users});
};

init();
