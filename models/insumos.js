const {Schema, model}=require('mongoose')

const insumosSchema=Schema({

    Nombre:{
        type:  String
    },
    Cantidad:{
        type: Number
    },
    Unidad_Medida:{
        type:  String
    },
    Estado:{
        type:String
    }
})


module.exports = model('insumos',insumosSchema)
