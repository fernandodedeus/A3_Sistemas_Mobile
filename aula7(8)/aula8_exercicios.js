/* precisarei criar uma frase com variaveis e constantes, terá nome
idade, peso, sobrenome, altura, imc (calculo), ano de nascimento

imc é peso / (altura * altura) */

const nome = 'João';
const idade = 19;
const peso = 55;
const nomeSobrenome = 'Victor';
const altura = 1.63;
let anoAtual = 2024;

let imc = peso / (altura * altura);
let anoDeNascimento = anoAtual - idade;

console.log(nome, nomeSobrenome);
console.log(idade);
console.log(peso);
console.log(altura);
console.log(imc);
console.log(anoDeNascimento);

console.log('Olá, me chamo', nome, nomeSobrenome, 'tenho', altura, 'de altura');
console.log('peso', peso, 'quilos, tenho', imc, 'de imc e nasci em', anoDeNascimento);

//template string = usar ${variavelDeclarada} para evitar abrir e fechar aspas sempre
console.log(`Olá, me chamo ${nome}`);
// para usar essa função é necessário usar o sinal ` para a string funcionar
console.log(`oi, me chamo ${nome}, tenho ${idade} anos`);

