const compras = require('../models/compra')

const getcompras = async (req, res) => {
    const compra = await compras.find()

    res.json({
        msg: 'Compra GET API',
        compra
    })
}

const postcompras = async (req, res) => {
    const { N_factura, M_pago, Fecha, Proveedor, Producto, Cantidad, Precio, Estado } = req.body

    const compra1 = new compras({ N_factura, M_pago, Fecha, Proveedor, Producto, Cantidad, Precio, Estado })
    await compra1.save()

    res.json({
        msg: 'Compra POST API',
        compra1
    })
}

const putcompras = async (req, res) => {
    const { N_factura, M_pago, Fecha, Proveedor, Producto, Cantidad, Precio, Estado } = req.body

    const compra1 = await compras.findOneAndUpdate({ N_factura: N_factura }, { M_pago, Fecha, Proveedor, Producto, Cantidad, Precio, Estado })

    res.json({
        msg: 'Compra API PUT',
        compra1
    })
}


const deletecompras = async (req, res) => {
    const { N_factura } = req.query

    const compras1 = await compras.findOneAndDelete({ N_factura: N_factura })

    res.json({
        msg: 'Compra DELETE API',
        compras1
    })
}


module.exports = {
    getcompras,
    postcompras,
    putcompras,
    deletecompras

}