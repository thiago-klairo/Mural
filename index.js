const express = require("express")
const app = express()
const PORT = 3000;
const apiRoute = require("./api/api")
const path = require("path")
const cors = require("cors")


/*ncEaminhando um arquivo html pro usuario,
precisa primeiro dar um require("path"), para utilizar essa função/ procedimento 
e usar o express.static, para arquivos estaticos, 
utiliza a variável do path: path.join, para juntar duas partes de um caminho ,
__dirname, para passar o nome do diretório */
app.use(express.json())
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", apiRoute)
app.use(cors)
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)

});
