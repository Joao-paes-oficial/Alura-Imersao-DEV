var primeiroValor = parseInt(prompt('Informe o primeiro valor:'))
var segundoValor = parseInt(prompt('Informe o segundo valor:'))
var opcao = parseInt(prompt('Escolha a opção que deseja:\n1 -> Soma\n2 -> Subtração\n3 -> Multiplicação\n4 -> Divisão'))
var resultado

if (opcao == 1){
    resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}else if (opcao == 2){
    resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}else if (opcao == 3){
    resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
}else if (opcao == 4){
    resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " : " + segundoValor + " = " + resultado.toFixed(2) + "</h2>")
}else{
    document.write("<h2>Opção inválida</h2>")
}