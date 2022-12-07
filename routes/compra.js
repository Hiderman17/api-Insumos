const { Router } = require('express')
const router = Router()//obtener la funcion router
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')

const { getcompras, postcompras, deletecompras, putcompras } = require('../controllers/compra')

router.get('/', getcompras)

router.post('/', [
    check('N_factura', 'el numero de factura es obligatorio').not().isEmpty(),

    check('M_pago', 'el medio de pago es  obligatorio').not().isEmpty().isIn(['efectivo', 'transferencia']),

    check('Fecha', 'La fecha es un campo obligatorio').not().isEmpty(),

    check('Proveedor', 'el proveedor es un campo obligatorio').not().isEmpty(),

    check('Producto', 'el producto es un campo obligatorio').not().isEmpty(),

    check('Cantidad', 'la cantidad es un campo obligatorio').not().isEmpty(),

    check('Precio', 'el precio es un campo obligatorio').not().isEmpty(),

    validarCampos
], postcompras)

router.delete('/', deletecompras)

router.put('/', putcompras)


// Exportar modulo
module.exports = router
