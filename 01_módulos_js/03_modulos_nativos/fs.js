const fs = require("fs");
const path = require("path");

// Criar uma pasta em um diretório

// Cria a pasta exatamente no diretório especificado
fs.mkdir(path.join(__dirname, "new-folder"), () => {}); //modo 1, mais indicado

// Cria a pasta no diretorio atual
//fs.mkdir("./new-folder", () => {}); // modo 2

//
fs.mkdir(path.join(__dirname, "new-folder"), (error) => {});

//Criar um arquivo nessa nova pasta
fs.writeFile(
  path.join(__dirname, "new-folder", "new-file.txt"),
  "Hello from FSC!",
  (error) => {}
);

// Acrescentando texto no arquivo
fs.appendFile(
  path.join(__dirname, "new-folder", "new-file.txt"),
  "\nHello World",
  (error) => {}
);

let fileContent = ""; //execução de código assincrono

// Ler o conteudo de um arquivo
fs.readFile(
  path.join(__dirname, "new-folder", "new-file.txt"),
  "utf-8",
  (error, data) => {
    //console.log(data)
    fileContent = data;

    console.log("Conteúdo do arquivo:", fileContent);
  }
);

// Método crypto

