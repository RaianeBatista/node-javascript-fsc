// setTimeout(() => {
//     //função assincrina

// })
const loginUser = (email, password, onSuccess, onError) => {
  // Chamar Banco de dados p veririfcar os dados do usuario

  setTimeout(() => {
    const error = false; // função callback
    if (error) {
      return onError("Erro na concexão ao banco.");
    }
    console.log("Usuário verificado no banco de dados!");
    //return { email };
    //callback({ email });
    onSuccess({ email });
  }, 3000);
};

const getUserVideos = (onSuccess, onError) => {
  // Chamar banco de dados para pegar os vídeos
  setTimeout(() => {
    onSuccess(["Vídeo_1", "Vídeo_2", "Vídeo_3"]);
  }, 2000);
};

const getUserVideoDetails = (onSuccess, onError) => {
  setTimeout(() => {
    onSuccess({ id: "1", name: "Node.js Assíncrono", duration: 1 });
  }, 2000);
};

//const user = loginUser("teste@test.com", "password");
const user = loginUser(
  "teste@test.com",
  "password",
  (user) => {
    console.log("Usuário logado com sucesso!");
    console.log(user);

    getUserVideos(
      (videos) => {
        console.log("Vídeos do usuário recuperados com sucesso!", videos);

        getUserVideoDetails(
          (video) => {
            console.log("Detalhe do vídeo 1 do usuário: ", video);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

//console.log(user);
