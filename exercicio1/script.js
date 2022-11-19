
let pergunta = prompt('Você quer comer mais uma coxinha? \nS - sim \nN - não').toUpperCase()
let soma = 0

while(pergunta === "S"){
    soma = soma + 2.5
    console.log(pergunta)
    pergunta = prompt('Você quer comer mais uma coxinha? \nS - sim \nN - não').toUpperCase()
}
console.log(`A sua conta é de R$ ${soma.toFixed(2)}`) 
