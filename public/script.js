
/*Isso informa pro servidor que somente após carregas as informações
a função updatePosts será valida */
document.addEventListener("DOMContentLoaded", () => {
    updatePosts()
})

function updatePosts() {
    /*Puxando a função do back end, você deve botar os parametros no fetch>
    fetch(urlDaRota,opção) */
    fetch("http://localhost:3000/api/all").then(res => {
        return res.json()
    }).then(json => {
        let postElements = "";
        /*A função fo back end, foi trazido como string, pois usamos
        o stringfy, para transformar em objeto, utilizaremos JSON.parse */
        let posts = JSON.parse(json)

        /*basicamente estamos falando que para cada post de posts, criaremos um postElement(não confunde com o postElements acima)
          , e para cada postElement, concatenaremos com o postElements vazio
         */
        posts.forEach((post) => {
            console.log(posts);
            /*Iremos postar um arquivo HTML, puxando o array post do back end, e alterando sua ID, TITLE e DESCRIPTION */
            let postElement = `<div id= ${post.id} class="card mb-4">
         <div class="card-header">
             <h5 class="card-title"> ${post.title}</h5>
         </div>
          <div class="card-body">
              <div class="card-text">${post.description} </div>
          </div>
     </div>`
            postElements += postElement;
        })
        /*Iremos modificar o texto, de acordo com os dados do posts do backEnd */
        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPost() {
    /*Estamos pegando os valores dos inputs title e description */
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;
    let post = { title, description };
    /*criei abaixo um objeto, passei primeiramente o metodo post
     , depois informamos para o back end , pelo header, que estamos mandando um JSON 
     e foi transformado o post que é um JSON em string*/
    const options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(post)
    }
    fetch("http://localhost:3000/api/new", options).then(res => {
        /*para atualizar as informações após mandar o post para o servidor */
        console.log(res)
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    });
}