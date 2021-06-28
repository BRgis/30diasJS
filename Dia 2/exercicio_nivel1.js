//1.Declare uma variável chamada desafio e atribua-a a um valor inicial '30 dias de JavaScript ' .
let curso = '30 dias de JavaScript'
//2. Imprima a string no console do navegador usando console.log ()
console.log(curso)
//3. Imprima o comprimento da string no console do navegador usando console.log ()
console.log(curso.length)
//4.Altere todos os caracteres da string para letras maiúsculas usando o método toUpperCase ()
console.log(curso.toLocaleUpperCase())
//5.Altere todos os caracteres da string para letras minúsculas usando o método toLowerCase ()
console.log(curso.toLocaleLowerCase())
//6.Corte (corte) a primeira palavra da cadeia utilizando substr () ou subsequência () Método
console.log(curso.substr(0,2))
console.log(curso.substring(0,2))
//7.Corte a frase Dias de JavaScript de 30 dias de JavaScript .
console.log(curso.substring(3))
//8.Verifique se a string contém uma palavra Script usando o método includes ()
console.log(curso.includes('dias'))
//9.Divida a string em uma matriz usando o método split ()
console.log(curso.split(''))
//10.Divida a string 30 dias de JavaScript no espaço usando o método split ()
console.log(curso.split(' '))
//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dividir a string na vírgula e alterá-la para um array.
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','))
//12.Altere 30 dias de JavaScript para 30 dias de Python usando o método replace () .
console.log(curso.replace('JavaScript','Python'))
//13O que é caractere no índice 15 na string '30 Dias de JavaScript '? Use o método charAt () .
console.log(curso.charAt(15))
//14.Qual é o código de caractere de J na string '30 Dias de JavaScript 'usando charCodeAt ()
console.log(curso.charCodeAt('J'))
//15.Use indexOf para determinar a posição da primeira ocorrência de a em 30 dias de JavaScript
console.log(curso.indexOf('a'))
//16Use lastIndexOf para determinar a posição da última ocorrência de a em 30 dias de JavaScript.
console.log(curso.lastIndexOf('a'))
//17.Use indexOf para encontrar a posição da primeira ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'
let conjuncao = 'Você não pode terminar uma frase com porque porque porque é uma conjunção'
console.log(conjuncao.indexOf('porque'))
//18.Use lastIndexOf para encontrar a posição da última ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'
console.log(conjuncao.lastIndexOf('porque'))
//19.Use search para encontrar a posição da primeira ocorrência da palavra porque na seguinte frase: 'Você não pode terminar uma frase com porque porque porque é uma conjunção'
console.log(conjuncao.search('porque'))
//20.Use trim () para remover qualquer espaço em branco no início e no final de uma string. Ex. '30 Dias de JavaScript'.
let curso2 = '    30 Dias de JavaScript    '
console.log(curso2.trim())
//21.Use o método startsWith () com a string 30 dias de JavaScript e torna o resultado verdadeiro
console.log(curso.startsWith('3'))
//22.Use o método endsWith () com a string 30 dias de JavaScript e torne o resultado verdadeiro
console.log(curso.endsWith('t'))
//23.Use match () método para encontrar todo A em 30 dias de JavaScript
console.log(curso.match('a'))
//24.Use concat () e mescle '30 dias de 'e' JavaScript 'em uma única string, '30 dias de JavaScript'
let string2 = '30 dias de'
console.log(string2.concat(' JavaScript'))
//25.Use o método repeat () para imprimir 30 dias de JavaScript 2 vezes
console.log(curso.repeat (2))