 //Números são criados apenas sem a utilização das aspas (automaticamente string)

var age = 28
var gols = 1000
var pi = 3.14 // ponto para decimal
var exponential = 2e10 // (20000000000)

console.log(age)
console.log(2e10) //Precisão para até 15 digítos

var soma = 100 + 50
var subtracao = 100 - 50
var multiplicacao = 100 * 2 
var divisao = 100 / 2
var expoente = 2 ** 4 // dois elevado à quarta potência
var modulo = 14 % 5 // resto da divisão

console.log(modulo)

//Operadores aritiméticos com Strings

var soma = '100' + 50 // 10050 não consegue converter
var subtracao = '100' - 50 // 50 consegue realizar a conversão
var multiplicacao = '100' * '2' // 200
var divisao = 'Comprei 10' / 2 //NaN ( not a number )

 //Função para verificar NaN

 var divisao = 'Isso é 100' / 2
 console.log(isNaN(divisao))

// Ordem é importante
//1. Multiplicação
//2. Divisão
//3. Soma
//4. Subtração
//Parentese utilizado para priorizar a operação

var total1 = 20 + 5 * 2 // 30
var total2 = (20 + 5 ) * 2 // 50 ---priorizou a operação interna
var total3 = 20 / 2 * 5 // 50
var total4 = 10 + 10 * 2 + 20 / 2 //40

var somaTeste = 10 + 10 * 2 + 3 + 10 * 10 / 2 // 83
console.log(somaTeste) 

//Operadores aritméticos unários
// ++ antes --- modifica adicionando 1 ao valor anterior e retorna o resultado
// ++ após --- modifica adicionando 1 ao valor mas não retorna o resultado dessa adição
// mesma coisa para o decremento (--)

var incremento = 5
console.log(incremento++)
console.log(incremento)

var incremento2 = 5
console.log(++incremento2)
console.log(incremento2)

var incremento3 = 5
console.log(incremento3--)
console.log(incremento3)

var incremento4 = 5
console.log(--incremento4)

// O + e o - tentam transformar o valor seguinte em número

var frase = 'Testando'
+frase //NaN
-frase //NaN

var idadeCaio = '24'
var somaIdade = 5

console.log(+idadeCaio + -somaIdade) // Somou a string com o número

/*
Exercício
*/

//Qual o resultado da seguinte expressão?
var testTotal = 10 + 5 * 2 / 2 + 20 // 35
console.log(testTotal)

//Crie duas expressões que retornem NaN
var somatorio = 'Dez'
var somatorio2 = 2
console.log(somatorio / somatorio2)

var phrase = 'Dois dividido por 10'
console.log(-phrase)

//Somar a string '200' com o número 50 e retornar 250
var valorString = '200'
var valorNumero = 50
var somaStringNumero = (+valorString + valorNumero)
console.log(somaStringNumero)

//Incremente o número 5 e retorne o seu valor incrementado
var number = 5
console.log(number++)
console.log(number)

var number2 = 5
console.log(++number2)

console.log(somaStringNumero++)
console.log(somaStringNumero++)
console.log(somaStringNumero++)
console.log(somaStringNumero++)
console.log(somaStringNumero++)
console.log(somaStringNumero++) // ou console.log(somaStringNumero + 5)

//COmo dividir o peso por 2?
var numero = '80'
var unidade = 'kg'
var peso = numero + unidade
var pesoPorDois = peso / 2 