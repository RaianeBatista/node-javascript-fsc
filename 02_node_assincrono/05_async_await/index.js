const loginUser = (email, password) => {
  // Retorne uma promise
  //return new Promise((resolve, reject) => { Arrow function
  return new Promise(function (resolve, reject) {
    // Função  normal
    setTimeout(() => {
      const error = false;

      if (error) {
        return console.log("Erro na conexão ao banco.");
      }

      resolve({ email, password }); // usa o resolve no lugar no onSuccess
    }, 3000);
  });
};

const getUserVideos = () => {
  return new Promise((resolve, reject) => {
    const error = true;
    if (error) {
      return reject("Erro ao recuperar os vídeos.");
    }

    setTimeout(() => {
      resolve(["Vídeo_1", "Vídeo_2", "Vídeo_3"]);
    }, 2000);
  });
};

const getUserVideoDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: "1", name: "Node.js Assíncrono", duration: 1 });
    }, 2000);
  });
};

// Criar função assincrona
//async function getUserData(params) { }  Função normal
const getUserData = async () => {
  try {
    // Arrow function
    const user = await loginUser("teste@email.com", "password");

    console.log("Usuário logado com sucesso.");
    console.log("Dados do usuário: ", user);

    const videos = await getUserVideos();
    console.log("Vídeos do usuário recuperados com sucesso!", videos);

    const videoDetails = await getUserVideoDetails();
    console.log("Detalhe do vídeo 1 do usuário: ", videoDetails);
  } catch (error) {
    console.log(error);
  }
};

getUserData();
