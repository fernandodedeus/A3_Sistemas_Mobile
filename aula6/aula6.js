// não podemos criar constantes com palavras reservadas (let let, let console)

// constantes precisam ter nomes significativos (let n = 'bianca'); n é um valor sem significação e que complica a manutenção do codigo
// não devemos começar o nome de uma constante com um número

// nomes de constantes não podem conter espaços ou traços

// utilizamos camelCase, exemplo de variável camelCase: let nomeCompletoDoCliente = Bianca Carlos do Nascimento;
// Case-sensitive significa que letra maiuscula e minuscula fazem diferença (nomedoCliente, nomedocliente)
// não é possivel modificar o valor de uma constante.

// Não utilize VAR, utilize LET. SEMPREEE!!

const nome = 'Bianca';
console.log(nome);

// não é possivel modificar o valor da constante, como seria no let

const primeiroNumero = 18;
const segundoNumero = 20;
// declarando um valor a constante, toda vez que colocar o nome declarado da constante, será atribuido o valor setado nela (ex: primeiroNumero = 18)

const resultado = primeiroNumero * segundoNumero;

//  multiplicadores: + - *(MULTIPLICAÇÃO) / (DIVISAO)

console.log(resultado);

// imprime o resultado da conta

const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

// é possível declarar uma let com as declarações em const

let resultadoTriplicado = resultado * 3;
// também é possivel modificar o valor do let quando desejado, porém essa ação acaba por deixar o primeiro valor declarado se perder, não podendo ser resgatado

 console.log(resultadoTriplicado);

// dentro de aspas = String (texto) / fora de aspas = NUMBER = NUMERO

console.log(typeof primeiroNumero); // typeof é usada para verificar qual é o tipo de variável (string ou number)

// para executar primeiro uma ação no typeof, usar parentese, exemplo:

console.log(typeof(primeiroNumero + nome));
// essa função irá retornar um valor igual a String, pois aqui misturamos um valor Number a um valor String

// para dar um resultado essa soma das variáveis, é necessário ambas estarem declaradas como NUMBER

























