
//OBJETOS - Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
// as variáveis dentro da variável se tornam propriedades
var pessoa = { //pessoa = objeto
  nome: 'Caio',
  idade: 24,
  profissao: 'Biólogo',
  possuiFaculdade: true
}

//Como acessar o objeto
pessoa.nome;
pessoa.idade;
//Chamar o objeto e em seguida a informação desejada

// MÉTODOS - É uma propriedade que possui uma função no local do seu valor

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado
  },
}

quadrado.lados; // 4
console.log(quadrado.area(5)); //25
quadrado.perimetro(5) // 20

// Organizar o código
// Objetos servem para organizar o código em pequenas partes reutilizáveis

//Abreviação de area: function () {} para area () {} no ES6+

var quadrado = {
  sides: 4,
  multiplier(side) {
    return side * side;
  },
  perimeter(side) {
    return this.sides * side;
  }
}
console.log(quadrado.multiplier(10));
console.log(quadrado.perimeter(5));