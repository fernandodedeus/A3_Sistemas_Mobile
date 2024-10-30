// Let vs Var
var nome = 'João';
console.log(nome);
// ECMAScript 2015 (ES6)
// NÃO POSSO CRIAR UMA VARIAVEL SEM CONST OU LET

const nome1 = 'Bianca'; //String com aspas simples
const nome2 = "Bianca"; // String com aspas duplas
const nome3 = `Bianca ${nome}`; // String com crase, possibilidade de usar template string
const num = 10; // number
const num1 = 15.23; // number
let nomeAluno; // variavel undefined = não aponta pra local nenhum na memoria
let sobrenomeAluno = null; // valor nulo, não aponta para local nenhum na memoria
// utilizamos o null para desconfigurar uma variável, usado muito para desabilitar cores em sites, modo escuro/claro 
const boolean = false; // utilizzei boolean para mostrar que é uma variavel booleana, porém só de colocar true ou false, o js reconhece como booleana

// usada para sistemas em que temos opções, exemplo:
// um site de aprovação ou reprovação de alunos, usando true ou false
// boolean tem valor lógico, mudar o fluxo da aplicação
const aprovado = true;
const a = [1, 2]; //para declarar uma const array, usar []
const b = a; // constante criada dando um valor para B que é igual ao valor de array

console.log(a, b);
// dados primitivos são string, number, undefined, null, boolean, symmbol
