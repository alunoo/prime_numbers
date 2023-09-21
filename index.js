const prompt = require("prompt-sync")();

let rein = true
let valor = 1
let divisores = 0


while(rein){
console.log("VERIFICADOR DE NÚMEROS PRIMOS\n")
console.log("Digite um valor e direi se é um número primo ou não:\n")
let x = parseFloat(prompt())

    if( x > 0){
        while(valor <= x){
            if( x % valor === 0){
                divisores++
            }
            valor++
        }
    }
    if(divisores === 2){
        console.log("O numero ",x," é primo!!")
    } else {
        console.log("O numero ",x," não é primo!!")
        
    }
    reinicio()
}

function reinicio(){   
    console.log("Deseja efetuar outra operação? Digite 'y' para sim ou 'n' para finalizar.")
    
    let verifyReinicio = prompt();

    if(verifyReinicio === "y" ){
        console.clear()
        rein = true
    } else {
        rein = false

    }
}
