const insumos = require('../models/insumos')

const getinsumos = async (req,res) => {

    const insumo = await insumos.find()

    res.json({
        msg:'INSUMOS GET API',
        insumo
    })
    

}

const postinsumos = async (req, res)=>{
    const {Nombre,Cantidad,Unidad_Medida,Estado}=req.body

    const insumo1= new insumos({Nombre,Cantidad,Unidad_Medida,Estado})
    await insumo1.save()

    res.json({
        msg:'INSUMOS POST API',
        insumo1
    })

}


const putinsumos = async (req, res) => {
    const { Nombre, Cantidad, Unidad_Medida, Estado } = req.body

    const insumo1 = await insumos.findOneAndUpdate({ Nombre: Nombre }, {
        Cantidad: Cantidad,
        Unidad_Medida: Unidad_Medida, Estado: Estado
    })

    res.json({
        msg: 'INSUMO PUT API',
        insumo1
    })

}


const patchinsumos= async (req,res)=>{
    const { Nombre, Cantidad} = req.body
    const insumo1 = await insumos.findOneAndUpdate({ Nombre: Nombre }, {Cantidad: Cantidad})

    res.json({
        msg:'INSUMO PATCH API',
        insumo1
    })
}

const deleteinsumos = async ( req,res)=>{
    const {Nombre}=req.query
    // Buscar y borrar
    // Antes de las llaves el atributo
    // DELETE FROM insumo WHERE Nombre = $Nombre

    const insumo1 = await insumos.findOneAndDelete({Nombre:Nombre})

    res.json({
        msg:'INSUMO DELETE API',
            insumo1
    })
}



module.exports = {
    getinsumos,
    postinsumos,
    putinsumos,
    patchinsumos,
    deleteinsumos
}