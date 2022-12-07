const { Router } = require('express')
const router = Router() 
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')

const {getProveedor, postProveedor, putProveedores, patchProveedores,  deleteProveedor} = require('../controllers/proveedor')

router.get('/', getProveedor)

router.post('/',[
    check('nombre' , 'El nombre es un campo obligatorio').not().isEmpty(),

    check('apellido', 'El apellido es un campo obligatorio').not().isEmpty(),

    check('correo', 'El correo no es valido').isEmail(),

    check('direccion', 'La direccion es un campo obligatorio').not().isEmpty(),

    check('telefono', 'El telefono debe de tener minimo 10 dijitos').isLength({min: 10}),

    check('nit', 'El nit es debe de tener minimo 10 dijitos').isLength({min: 10}),

    validarCampos
],
postProveedor)

router.put('/', putProveedores)

router.patch('/', patchProveedores)

router.delete('/', deleteProveedor)


module.exports = router