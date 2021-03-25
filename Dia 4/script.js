var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BZTMyY2Q2MDctMDFlMS00MWEzLTk1NmEtNDcxNzg1ZGJlNGU5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_UY268_CR16,0,182,268_AL_.jpg"]
var nomeFilmes = ["Coming 2 America", "Wonder Woman", "Tom and Jerry"]
for (var i = 0; i < listaFilmes.length; i++){
    //document.write("<img scr=" + listaFilmes[i] + ">")      
    var img = document.createElement('img')
    img.setAttribute('src', listaFilmes[i])
    document.body.appendChild(img)
    document.write("<h2>" + nomeFilmes[i] + "</h2>") 
}