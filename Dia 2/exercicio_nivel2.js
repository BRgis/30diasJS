//Usando console.log (), imprima a seguinte instrução:
//A citação ' Não há exercício melhor para o coração do que estender a mão e erguer as pessoas. ' por John Holmes nos ensina a ajudar uns aos outros.
console.log("A citação ' Não há exercício melhor para o coração do que estender a mão e erguer as pessoas. ' por John Holmes nos ensina a ajudar uns aos outros.")

//Usando console.log (), imprima a seguinte citação de Madre Teresa:
//" Amor não é paternalista e caridade não tem nada a ver com piedade, é amor. Caridade e amor são o mesmo - com a caridade você dá amor, então não dê apenas dinheiro, mas estenda a mão em vez disso. "
console.log(`" Amor não é paternalista e caridade não tem nada a ver com piedade, é amor. Caridade e amor são o mesmo - com a caridade você dá amor, então não dê apenas dinheiro, mas estenda a mão em vez disso. "`)

//Verifique se typeof '10' é exatamente igual a 10. Caso contrário, torne-o exatamente igual.
let num = '10'
let numero = 10
console.log(num == numero) // true

//Verifique se parseFloat ('9.8') é igual a 10, caso contrário, torne-o exatamente igual a 10.
let num2 = '9.8'
let numero2 = parseFloat(num2)
let num3 = 10
console.log(numero2)  // 9.8
console.log(numero2 == num3)  // false
let numInt = Math.ceil(num2)
console.log(numInt) //10
console.log(numInt == num3)  // true

//Verifique se 'on' é encontrado tanto em python e jargon
let curso1 = 'python'
let curso2 = 'jargon'
console.log(curso1.includes('on')) // true
console.log(curso2.includes('on')) // true
console.log(curso1.includes('on') == curso2.includes('on')) //true

//"I hope this course is not full of jargon". Verifique se há ''jargon'' na frase.
let frase = "I hope this course is not full of jargon"
console.log(frase.includes('jargon')) // true

//Gere um número aleatório entre 0 e 100 inclusive.
let random = Math.floor(Math.random() * 101) ;
console.log(random)

//Gere um número aleatório entre 50 e 100 inclusive.
let random1 = Math.floor(Math.random(50) * 100) 
console.log(random1)

//Gere um número aleatório entre 0 e 255, inclusive.
let random2 = Math.floor(Math.random() * 256 )
console.log(random2)

//Acesse os caracteres da string 'JavaScript' usando um número aleatório.
let curso_reduzido = 'JavaScript'
let qt_string = curso_reduzido.length
let random_curso = Math.floor( Math.random() * qt_string+1) 
console.log(curso_reduzido)
console.log(random_curso)
console.log(curso_reduzido.substring(random_curso))

//Use console.log () e caracteres de escape para imprimir o seguinte padrão.
//1  1  1  1  1 
//2  1  2  4  8 
//3  1  3  9  27 
//4  1  4  16 64 
//5  1  5  25 125
console.log("1  1  1  1  1 \n2  1  2  4  8 \n3  1  3  9  27 \n4  1  4  16 64 \n5  1  5  25 125")

//Use substr para cortar a frase ""because because because"" da seguinte frase: 'You cannot end a sentence with because because because is a conjunction'
let frase2 = 'You cannot end a sentence with because because because is a conjunction'
let posicao1 = frase2.indexOf('because')
let qt_posicicoes = 'because because because'.length
console.log(frase2.substr(posicao1,qt_posicicoes))