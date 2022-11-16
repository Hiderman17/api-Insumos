const { Router } = require('express')
const router = Router()


const { getinsumos, postinsumos, putinsumos, deleteinsumos, patchinsumos } = require('../controllers/insumos')

router.get('/', getinsumos)
router.post('/', postinsumos)
router.put('/', putinsumos)
router.patch('/', patchinsumos)
router.delete('/',deleteinsumos)

module.exports = router