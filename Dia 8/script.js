var cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem: "data:image/jpeg;base64,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",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaJoao]

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 4)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 4)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 4)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibeCartaJogador()
}

function exibeCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
    
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = '<div id="opcoes" class="carta-status">'

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>"
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById('resultado')

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Parabéns! Você venceu!</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Infelizmente você perdeu!</p>'
    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }
    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina()
}

function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""
    
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = '<div id="opcoes" class="carta-status">'

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>"
}