/*
Sâo 7 tipos de dados, sendo todos PRIMITIVOS, exceto os objetos
Dados Primitivos : Imutáveis   

var nome = 'Caio'                  //String
var idade = 24                     //Number
var possuiFaculdade = true         //Boolean
var time                           //Undefined
var comida = null                  //Null
var simbolo = Symbol()             //Symbol
var novoObjeto = {}                //Object

Verificar o tipo de dado
console.log(typeof ...)
*/

var myName = 'Caio'
console.log(typeof myName)

var age = 24
console.log(typeof age)

/*
String:
Você pode somar uma string e concatenar palavras
*/

var myName = 'Caio'
var lastName = 'Nunes'
var nomeCompleto = myName + ' ' + lastName
console.log(nomeCompleto)

/*
Também é possível somar números com strings. O Resultado final é sempre uma STRING
*/

var middleName = 'Santos'
var namesQuantity = 5
var frase = 'Meu nome do meio é ' + middleName + ' e eu possuo no total ' + namesQuantity + ' sobrenomes.'
console.log(frase)
console.log(typeof frase)

/*
Formas de atribuir valores em variáveis no Javascript:

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil"; ---retira a função
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido
*/

//Template String
var gols = '100'
var firstPhrase = 'Romário fez ' + gols + ' gols'
console.log(firstPhrase)

var secondPhrase = `Romário fez ${gols * 2} gols` //Template String
console.log(secondPhrase)

/*
Exercício
*/

//Declare uma variável contendo uma string
var petName = 'Luma'
console.log(typeof petName)
//Declare uma variável contendo um número dentro de uma string
var petAge = '10'
console.log(typeof petAge)
//Declare uma variável com a sua idade
var myAge = 24
console.log(typeof myAge)
//Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as duas
var myName = 'Caio'
var secondName = 'Nunes'
var phrase = `Meu nome social é ${myName} ${secondName}`
console.log(phrase)
console.log(typeof phrase)
//Coloque a seguinte frase em uma variável: It's time
var doubt = "Para inserir 'It's time' na frase eu preciso iniciar o valor com outro tipo de aspas"
console.log(doubt)

var newPhrase = `${'Its time'} to anunciar que ${phrase}`
console.log(newPhrase)
//Descubra o tipo de variável do seu nome
console.log(typeof myName)

var verifyTypeName = typeof myName
console.log(verifyTypeName)