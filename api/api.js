
const express = require("express");
const router = express.Router();
const posts = require("../model/post")


router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
});
/*Código para gerar um id, e guardar a informação que será enviada
pelo usuários */
router.post("/new", (req, res) => {

    let title = req.body.title;
    let description = req.body.description;
    posts.newPost(title, description)
    res.send("post adicionado");
    /*Para acrescentar no sistema após o envio do usuário */


});

module.exports = router