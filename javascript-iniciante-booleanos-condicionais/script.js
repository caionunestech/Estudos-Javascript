//Existem dois valores para booleanos: TRUE e FALSE.

var possuiGraduacao = true
var possuiDoutorado = true

// Verifica se uma expressão é verdadeira com IF, caso contrário ELSE será ativdado

if(possuiGraduacao) {
  console.log('Parabéns, você possui uma graduação')
} else {
  console.log('Você ainda não concluiou ou começou uma graduação')
}

if(possuiDoutorado) {
  console.log('Parabéns você é um doutor')
} else if(possuiGraduacao) {
  console.log('Você não possui doutorado mas possui uma gradução')
} else {
  console.log('Você não possui Doutorado nem Graduação')
}

var nome = ''

if(nome) {
  console.log(nome)
} else{
  console.log('A variável NOME não foi definida')
}

// Truthy e Falsy
/*
---formas que o JS lê um valor como FALSO, quando a variável corresponde a:

if(false)
if(0)
if(NaN)
if(null)
if(undefined)
if('')
if("")
if(``)

---qualquer outro valor da variável diferente dos acima que retornar é TRUE

if(true)
if(1)
if(' ') //passando um objeto vazio
if('caio')
if(-5)
if({})

//Operador Lógico de Negação

if(!true)         //false
if(!1)            //false
if(!'')           //true
if(!undefined)    //true
if(!!' ')         //true
if(!!'')          //false

//Operadores de Comparação

10 > 5----true
5 > 10----false
20 < 10---false
10 <= 10--true
10 >= 11--false (maior ou igual)

O == faz uma comparação não tão estrita e o ==== faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos o ===

10=='10'        true
10==10          true
10==='10'       false
10===10         true
10!=15          true
10!='10'        false
10!=='10'       true

!== é a mesma coisa que === porém verificando se NÃO é (verificação estrita)
!= é a mesma coisa que == porém verificando se NÃO é
*/

/*
Operadores Lógicos &&
---compara SE UMA expressão E A OUTRA é verdadeira

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão' --- os dois são TRUTHY pro serem strings e possuirem um conteúdo, sendo assim, o && retorna o último valor verdadeiro
(5 - 5) && (5 + 5); // 0 ---zero é um valor FALSY e por isso o && retorna o primeiro valor falso (5-5 = 0)
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
*/

if ((5 - 5) && (5 + 5)) { // 5-5=0 logo, sendo 0 um valor FALSY o && vai retornar um valor falso
  console.log('Verdadeiro')
}else{
  console.log('Falso')
}

if ((5 - 10) && (5 + 5)) { 
  console.log('Verdadeiro')
}else{
  console.log('Falso')
}

/*
Operador Lógico ||
Compara se uma expressão OU outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

Retorna sempre o primeiro valor verdadeiro

&& --- retorna sempre o primeiro FALSE ou o último verdadeiro
|| --- retorna sempre o primeiro TRUE
*/
var condicional2 = (5 - 5) || (5 + 5) || (10 + 2)
console.log(condicional2)

/*
Switch
O SWITCH permite verificar se uma variável é igual a diferentes valores utilizando o CASE.
Caso seja igual você pode utilizar a palavra BREAK; para cancelar a continuação 
*/

var corFavorita = 'Azul'

switch (corFavorita) {
  case 'Azul':
    console.log('A cor é AZUL')
    break;
  case 'Verde':
    console.log('A cor é VERDE')
    break;
  case 'Amarelo':
    console.log('A cor é AMARELO')
  default:
    console.log('Você não escolheu nenhuma cor das disponíveis')
}

// Verifique se a sua idade é maior do que a de algum parente

var idadeCaio = 24
var idadeParente = 40

if (idadeCaio > idadeParente) {
  console.log('A idade de Caio é maior que a idade do Parente')
} else if (idadeCaio === idadeParente){
  console.log('As idades são iguais')
}else{
  console.log('A idade de Caio não é maior que a idade do Parente')
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3 - Retornou o último valor verdadeiro (5-2 =3)
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo; //declaração de variável sem nada = undefined(FALSE)
var dinheiroNaConta = 0; // 0 é um valor FALSE

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo,!!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china){
    console.log('O Brasil supera a população')
  }else if (brasil === china){
    console.log('Os dois países possuem a mesma população')
  }else{
    console.log('A china supera a população')
  }

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}