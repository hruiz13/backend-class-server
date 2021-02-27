const { response } = require('express')

const usersGet = (req, res = response) => {


    const query = req.query; //es lo que viene despues de un "?", se puede desestructurar.  Se recibe como string

    res.json({
        msg: "get API - controller",
        query
    })
}

const usersPost = (req, res) => {

    const body = req.body //es lo que viene en el body, se puede desestructurar. Se recibe como string

    res.status(201).json({
        msg: "post API",
        body
    })
}

const usersPut = (req, res) => {

    const id = req.params.id; //es lo que viene en la ruta (link), se debe conf en su ruta. Se recibe como string

    res.json({
        msg: "put API",
        id
    })
}

const usersDelete = (req, res) => {
    res.json({
        msg: "delete API"
    })
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
}