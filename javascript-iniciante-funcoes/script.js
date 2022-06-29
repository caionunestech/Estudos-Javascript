/*
Funções

Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function nomeDaFuncion() ---dentro do paranteses pode ou não ter PARÂMETROS
*/

function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado(10))
//--------------------------------
function pi() {       // executando pi
  return 3.14
}

var total = 5 * pi() // executando pi
console.log(total)
console.log(pi)      // retorna a função
console.log(pi())    // executando pi

// os parentese '()' executam uma função

/*
Parâmetros e Argumentos

Ao CRIAR uma função, você pode definir PARÂMETROS
Ao EXECUTAR uma função, você pode passar ARGUMENTOS
*/

function imc(peso, altura) {         //noem da função com os parâmetros (peso e altura)
  var imc = peso / (altura ** 2)
  return imc
}

console.log(imc(80, 1.80))                       //argumentos
console.log(imc(60, 1.70))                       //argumentos

//-------------------------
console.log('Escolha três cores: Azul, Vermelho ou Amarelo')
function corFavorita(cor) {
    if (cor === 'azul') {
    return 'Você gosta de azul'
    }else if (cor === 'vermelho') {
    return 'Você gosta de vermelho'
    }else if (cor === 'amarelo') {
    console.log('Você gosta de amarelo')
    }else {
      return 'você não selecionou nenhuma cor'
    }
}
//------------------------
/*
Argumentos podem ser funções
*/

addEventListener ('click', function() { // evento - 1 argumento - 2 argumento
//A função possui dois PARÂMETROS:
// Tipo de evento ---passou uma STRING (evento) com nome de 'click' como PARÂMETRO
//Função anônima 
  console.log('Clicou')
})