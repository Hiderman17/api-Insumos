const {Schema, model} = require('mongoose')

//Definir la estructura de la colección 
const ProveedorSchema = Schema({
    nombre: {
        type: String,
        required:[true, 'El nombre es un campo obligatorio']
    },
    apellido: {
        type: String,
        required:[true, 'El apellido es un campo obligatorio']
    },
    correo: {
        type: String,
        required:[true, 'El correo es un campo obligatorio'],
        unique:true
    },
    direccion: {
        type: String,
        required:[true, 'La direccion es un campo obligatorio'],

    },
    telefono: {
        type: Number,
        required:[true, 'El telefono es un campo obligatorio']
    },
    nit: {
        type: Number,
        required:[true, 'El nit es un campo obligatorio'],
        unique:true
    }
})

module.exports = model('Proveedor', ProveedorSchema)