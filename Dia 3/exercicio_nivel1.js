//Declare firstName, lastName, country, city, age, isMarried, variável year e atribua valor a ela e use o operador typeof para verificar diferentes tipos de dados.
let firstName = 'Gisele'
let lastName = 'Oliveira'
let country = 'Brasil'
let city = 'Florianópolis'
let age = 38
let isMarried = true
let nowdate = new Date()
let year = nowdate.getFullYear()
console.log(typeof firstName) // string
console.log(typeof lastName) // string
console.log(typeof country) //string
console.log(typeof city) // string
console.log(typeof age) //number
console.log(typeof isMarried) // boolean
console.log(typeof nowdate) //object
console.log(typeof year) //  number

//Verifique se o tipo de '10' é igual a 10
console.log('10' == 10)  //true

//Verifique se parseInt ('9.8') é igual a 10
console.log(parseInt('9.8') == 10)  // false

//O valor booleano é verdadeiro ou falso.
//I.Escreva três instruções JavaScript que forneçam um valor verdadeiro.
//II.Escreva três instruções JavaScript que forneçam um valor falso.


//Descubra o resultado da seguinte expressão de comparação primeiro, sem usar console.log (). Depois de decidir o resultado, confirme-o usando console.log ()
//
let a = 4 > 3    // true
console.log(a) // true
let b = 4  >= 3 //true
console.log(b) // true
let c = 4 < 3 //false
console.log(c) // false
let d = 4 <= 3 //false
console.log(d) // false
let e = 4 == 4 // true
console.log(e) // true
let f = 4 === 4 // true 
console.log(f) // true
let g = 4 != 4 // false
console.log(g) // false
let h = 4 !== 4 // false
console.log(h) // false
let i = 4 != '4' // false
console.log(i) // false
let j = 4 == '4' // true
console.log(j) // true
let k = 4 === '4' // false
console.log(k) // false

//Encontre a extensão do python e do jargon e faça uma declaração de comparação falsa.
console.log('pythom'.length != 'jargon'.length)

//Descubra o resultado das seguintes expressões primeiro sem usar console.log (). Depois de decidir o resultado, confirme-o usando console.log ()
//
let l = 4 > 3 && 10 < 12 //true
console.log(l) // true
let m = 4 > 3 && 10 > 12 //false
console.log(m)
let n = 4> 3 && 10> 12 //false
console.log(n) //false
let o = 4> 3 || 10 <12 // true
console.log(o) // true
let p = 4> 3 || 10> 12 //true
console.log(p) // true
let q = ! (4> 3) //false
console.log(q)
let r = ! (4 <3) //true
console.log(r) //true
let s = !(false) //true
console.log(s)
let t = ! (4> 3 && 10 <12)  //false
console.log(t) //false
let u = ! (4> 3 && 10> 12)  //true
console.log(u) //true
let v = ! (4 === '4') //true
console.log(v)

//Use o objeto Date para fazer as seguintes atividades
const data_atual = new Date()
//Qual é o ano hoje?
console.log(data_atual.getFullYear())
//Qual é o mês de hoje como um número?
console.log(data_atual.getMonth())
//Qual é a data hoje?
console.log(data_atual.getDate())
//Qual é o dia de hoje como um número?
console.log(data_atual.getDay())
//Quais são as horas agora?
console.log(data_atual.getHours())
//Quais são os minutos agora?
console.log(data_atual.getMinutes())
//Descubra o número de segundos decorridos de 1º de janeiro de 1970 até agora.
console.log(data_atual.getTime())
