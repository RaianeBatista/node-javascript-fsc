// Principais módulos nativos do Node.js
const path = require("path"); // importando o módulo path
const fs = require("fs");

console.log(__dirname);

// Pegar o nome de um arquivo
console.log("Nome do arquivo: ", path.basename(__filename));

// Pegar a extensão de um arquivo
console.log("Extensão de um arquivo:", path.extname(__filename));

//Criar um arquivo no diretorio do arquivo atual
//fs.writeFile(path.join(__dirname), 'message.txt')

//console.log(path.join(__dirname), "message.txt"); O path.join() é usado para juntar caminhos

//console.log(path.join(__dirname), "folder", "message.txt"); // acrescenta arquivo

fs.writeFile(path.join(__dirname, "message.txt"), "Welcome to FSC!", () => { }); // cria arquivo


