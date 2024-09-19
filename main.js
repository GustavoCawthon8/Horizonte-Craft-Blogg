function pesquisar() {
  var input, filtro, post, postItens, h2;
  input = document.getElementById("search");
  filtro = input.value.toUpperCase();
  post = document.getElementById("post")
  postItens = post.getElementsByTagName("div");
  for (let i = 0; i < postItens.length; i++) {
    h2 = postItens[i].getElementsByTagName("h2")[0];
    if (h2.innerHTML.toUpperCase().indexOf(filtro) > -1) {
      postItens[i].style.display = ""
    } else {
      postItens[i].style.display = "none"
    }
  }
}

document.getElementById("btnSearch").addEventListener("click", pesquisar)