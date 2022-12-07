const Proveedor = require('../models/proveedor')

const getProveedor = async (req, res) =>{
    const proveedores = await Proveedor.find()

    res.json({
        msg: 'Proveedor GET API',
        proveedores
    })
}   

const postProveedor = async (req, res) => {
    //Desestructuración de parámetros 
    const {nombre, apellido, correo, direccion, telefono, nit} = req.body
    //Crear el objeto 
    const proveedor1 = new Proveedor ({nombre, apellido, correo, direccion, telefono, nit}) 
    await proveedor1.save()//Guardar en MongoDB

    res.json({
        msg:'Proveedor POST API',
        proveedor1
    })

}



const putProveedores = async (req, res) =>{
    const {nombre, apellido, correo, direccion, telefono, nit} = req.body

    const proveedor1 = await Proveedor.findOneAndUpdate({nombre : nombre},{
        apellido : apellido,
        correo: correo,
        direccion: direccion,
        telefono: telefono,
        nit : nit
    })

    res.json({
        msg: "Proveedores PUT API",
        proveedor1
    })
}

const patchProveedores = async (req, res) =>{
    const {nombre, nit} = req.body

    const proveedor1 = await Proveedor.findOneAndUpdate({nombre : nombre},{ nit : nit})

    res.json({
        msg: "Proveedores PATCH API",
        proveedor1
    })
}

const deleteProveedor = async (req, res) =>{
    const {nombre} = req.query

    const proveedor1 = await Proveedor.findOneAndDelete({nombre: nombre})

    res.json({
        msg:'Proveedor DELETE API',
        proveedor1
    })
}

module.exports = {
    getProveedor,
    postProveedor,
    putProveedores,
    patchProveedores,
    deleteProveedor

}