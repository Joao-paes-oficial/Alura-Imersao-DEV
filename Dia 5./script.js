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