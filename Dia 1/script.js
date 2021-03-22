var valorEmDolar = prompt('Informe o valor em dólar que você deseja passar para inteiro:')

var valorEmDolarConvertido = parseFloat(valorEmDolar)

var resultado = valorEmDolarConvertido * 5.50
resultado = resultado.toFixed(2)
alert(resultado)