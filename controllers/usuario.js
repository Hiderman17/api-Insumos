const Usuario = require('../models/usuario')
const bcrypt = require ('bcryptjs')

const getUsuario = async (req, res) => {
    const Usuarios = await Usuario.find()

    res.json({
        msg: 'Usuarios Registrados',
        Usuarios
    })
}

const postUsuario = async (req, res) => {
    const { Nombre, Apellido, Tipo_Documento, Documento, Direccion, Telefono, Correo, Contrasena, Rol, Estado } = req.body

    const Usuario1 = new Usuario({ Nombre, Apellido, Tipo_Documento, Documento, Direccion, Telefono, Correo, Contrasena, Rol, Estado })

    Usuario1.Contrasena = bcrypt.hashSync(Contrasena, 10)
    await Usuario1.save()

    res.json({
        msg: 'Usuario Registrado',
        Usuario1
    })
}

const putUsuario = async (req, res) => {
    const { Nombre, Apellido, Tipo_Documento, Documento, Direccion, Telefono, Correo, Contrasena, Rol, Estado } = req.body

    const Usuario1 = await Usuario.findOneAndUpdate({ Documento: Documento }, {
        Nombre: Nombre, Apellido: Apellido, Tipo_Documento: Tipo_Documento, Direccion: Direccion,
        Telefono: Telefono, Correo: Correo, Contrasena: Contrasena, Rol: Rol, Estado: Estado
    })
    res.json({
        msg: 'Usuario Modificado',
        Usuario1
    })
}

const deleteUsuario = async (req, res) => {
    const { Documento } = req.query

    const Usuario1 = await Usuario.findOneAndDelete({ Documento: Documento })

    res.json({
        msg: 'Usuario Eliminado',
        Usuario1
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}