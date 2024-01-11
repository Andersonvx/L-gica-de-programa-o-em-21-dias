let nome = ''
let idade = 0
let peso = 0
let altura = 0

nome = prompt('Digite seu nome')
idade = parseInt(prompt('Digite sua idade'))
peso = parseInt(prompt('Digite seu peso'));
altura = parseFloat(prompt('Digite sua altura'));

let anoNasc = 0
anoNasc = 2023 - idade

let Imc = 0
Imc = peso / (altura * altura)

console.log(' Ola ' + nome + ' voce tem ' + idade + ' anos, nasceu em ' + anoNasc + ' tem ' + altura + ' de altura, pesa ' + peso + ' kg e seu IMC é '  + Imc + ' kg/m² ')