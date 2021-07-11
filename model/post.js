module.exports = {
    posts: [
        {
            id: "0",
            title: "Título",
            description: "Descrição",
        }
    ],
    /*Uma função que vai pegar todos os posts */
    getAll() {
        return this.posts;
    },
    newPost(title, description) {
        /*Como id não é a chave, precisa ser atribuido nessa forma, se estivesse
        tudo no mesmo arquivo, não precisaria do id: */
        if (title != "" && description != "") this.posts.push({ id: generateID(), title, description })
    },
}

function generateID() {
    /* O .toString utiliza uma base de 0 a 36, os decimais vao de 0 a 10,
    quando passa disso, ele gera letras do alfabeto random /
    com a substring, foi delimitado para começar no 3 número, 2 posição
    e imprimir os proximos 9*/
    return Math.random().toString(36).substr(2, 9);
}