var numeroTentativas = 3
var numeroEscolhido = parseInt(Math.random() * (10 - 1) + 1)
alert(numeroEscolhido)

while (numeroTentativas > 0){
    var resposta = parseInt(prompt('Informe um valor de 0 até 10'))
    if (resposta == numeroEscolhido){
        numeroTentativas -= numeroTentativas
        //Pode usar o "break" ao invés de "numeroTentativas -= numeroTentativas"
    }else if(resposta > numeroEscolhido){
        alert('O número que você escolheu é maior que o número certo.')
    }else{
        alert('O número que você escolheu é menor que o número certo.')
    }
    numeroTentativas --
}
if (resposta != numeroEscolhido){
    document.write("<h2 class='gameConsole'>Você errou! O número era "+ numeroEscolhido +" :(</h2>")
}else{
    document.write("<h2 class='gameConsole'>Parabéns! Você acertou :)</h2>")
}