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
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaJoao = {
    nome: "Saitama",
    imagem: "https://cdn.myanimelist.net/images/characters/11/294388.jpg",
    atributos: {
        ataque: 100,
        defesa: 100,
        magia: 0
    }
}

var cartaNaruto = {
    nome: "Naruto",
    imagem: "https://static.wikia.nocookie.net/naruto/images/c/ce/Naruto_Uzumaki_-_Fase_Boruto.png/revision/latest?cb=20180303220658&path-prefix=pt-br",
    atributos: {
        ataque: 90,
        defesa: 87,
        magia: 100
    }
}

var cartaGoku = {
    nome: "Goku",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2021/02/dragon-ball-super-goku-ultra-instinct-mastered-01-910x516.jpg",
    atributos: {
        ataque: 100,
        defesa: 85,
        magia: 100
    }
}

var cartaAsta = {
    nome: "Asta",
    imagem: "https://i1.sndcdn.com/artworks-000386696049-vi8lot-t500x500.jpg",
    atributos: {
        ataque: 100,
        defesa: 70,
        magia: 0
    }
}

var cartaErenTita = {
    nome: "Eren Titã",
    imagem: "https://i.pinimg.com/550x/4d/8f/67/4d8f67058aa4b29a9daf55bd815124d7.jpg",
    atributos: {
        ataque: 95,
        defesa: 95,
        magia: 0
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaJoao, cartaNaruto, cartaGoku, cartaAsta, cartaErenTita]

var pontosJogador = 0
var pontosMaquina = 0

atualizarPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizarPlacar(){
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
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
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0){
        if (pontosJogador > pontosMaquina){
            htmlResultado = '<p class="resultado-final">Parabéns! Você venceu!</p>'
        }else if (pontosJogador < pontosMaquina){
            htmlResultado = '<p class="resultado-final">Infelizmente você perdeu.</p>'
        }else{
            htmlResultado = '<p class="resultado-final">Empate</p>'
        }
        alert('Fim de jogo!')
    }else{
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizarPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
    var divCartas = document.getElementById('cartas')
    
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')

    divResultado.innerHTML = ""
}