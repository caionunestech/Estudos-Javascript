/* 
As variáveis são responsáveis por guardados dados na memória
Existem três formas de armazenar dados em variáveis:
1. var
2. let
3. const
*/

var nome = 'Caio'
var idade= '24'
var possuiFaculdade = 'True'

console.log(nome, idade, possuiFaculdade)

/*
 As variáveis existem justamente para evitar repetições
 Conceito DRY (Don't repeat yoursel)
*/

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log(precoTotal)

/*
Sintaxe:
1. Palavra chave VAR
2. Nome da variável
3. Sinal de igual e valor da variável

String: Colocar ' ou "
Valor: Apenas colocar o número

Podem ser criadas diversar variáveis de uma única vez sem a repetição da palavra chave VAR
*/

var sobrenome = 'Nunes',
    cidade = 'Salvador',
    ensinoMedio = true;

console.log(sobrenome, cidade, ensinoMedio)

/* 
Sem valor:
Pode declarar uma variável e não atribuir valor inicialmente
*/

var semDefinicao;
console.log(semDefinicao)

/*
As variáveis podem começar com $, _, ou letas.

São case sensitive - nome != Nome

Não utilizar palavras reservadas
https://www.w3schools.com/js/js_reserved.asp

Camel case
Boas práticas de desenvolvimento
partiuEstagio, abrirModal, possuiFaculdade, ensinoMedio
*/

var $programador;
var _stack;
var areaDeEnfoque;

/*
Hoisting:
São movidas para cima do código, porém o valor atribuído não é movido

console.log(comida);
var comida = 'Pizza';
---undefined

var comida = 'Pizza';
console.log(comida);
---Pizza
*/

/*
Mudar o valor atribuído:
É possível mudar os valores atribuídos a variáveis declaradas com VAR e LET. Não é possível modificar com CONST.
*/

var time = 'Bahia'
time = 'Vitória' //Redefiniu o valor 
console.log(time)

// VAR permite diferentes nomes, LET permite apenas um nome
// CONST valor constante que não pode ser alterado

//Declarar uma Variável com um nome
var name = 'Luma'
//Declarar uma Variável com uma idade
var age = 10
//Declarar uma variável com a sua comida favorita e não atribuir valor
var favoriteFood = ''
//Atribuir valor a sua comida favorita
favoriteFood = 'Cuscuz'
//Declarar 5 variáveis diferentes sem valores    
var firstIngredient = '',
    secondIngredient = '',
    thirdIngredient = '',
    fourthIngredient = '',
    fifthIngredient = '';

console.log(favoriteFood, firstIngredient, secondIngredient, thirdIngredient, fourthIngredient, fifthIngredient)