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

O == faz uma comparação não tão estrita e o ==== faz uma comparação estrita, ou seja, o tipe de dado deve ser o mesmo quando usamos o ===

10=='10'        true
10==10          true
10==='10'       false
10===10         true
10!=15          true
10!='10'        false
10!=='10'       true

!== - mesma coisa que === porém verificando se não é (verificação estrita)
!= - mesma coisa que == porém verificando se não é
*/