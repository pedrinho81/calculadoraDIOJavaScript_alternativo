let resultado = 0

function calculadora() {
   
   
    let operacao = prompt("Digite a operação matemática desejada.")

    let operacaoConv = Number(operacao)
   

    if(isNaN(operacaoConv)) {

        console.log(`Operação no if = ${operacao}` )

        let valor1 = Number(prompt("Digite um primeiro valor."))

        let valor2 = Number(prompt("Digite um segundo valor."))


        console.log(!valor1)

        if (isNaN(valor1) || isNaN(valor2)) {
            alert("valores inválidos")
            return location.reload
        }
        
        calculo(operacao, valor1, valor2)

        alert(`O resultado é ${resultado}`)

        return location.reload
        
    } else {
        console.log("else")
        alert("Operação inválida, tente utilizar uma das quatro expressões básicas.")
      
        return location.reload()

    }
     
}

function calculo(operacao, valor1, valor2) {
   
    if (operacao == "+") {
        resultado = valor1 + valor2
    } else if (operacao == "-") {
        resultado = valor1 - valor2
    } else if (operacao == "*") {
        resultado ==valor1 + valor2 
    } else if (operacao == "/") {
        resultado = valor1 / valor2
    }
    
}


calculadora()
