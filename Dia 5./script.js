/*
É necessário usar o link da imagem
Para testar o código, pode-se usar o determinado link como exemplo: 
"https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
Esse é o link do cartaz do filme Toy Story 4
*/
function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector("#filme")
    var FilmeFavorito = campoFilmeFavorito.value
    if (FilmeFavorito.endsWith('.jpg')){
        listarFilmesNaTela(FilmeFavorito)
    } else{
        alert('Link inválido')
    }
    campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme){
    var listarFilmes = document.querySelector("#listaFilmes")
    var img = document.createElement('img')
    img.setAttribute('src', filme)
    document.body.appendChild(img)
    listarFilmes.innerHTML = listarFilmes.innerHTML + elementoFilme

}
