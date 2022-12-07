const express=require('express')
const cors = require('cors')
const {dbConnetion} =require('../database/config')

class Server{
    constructor(){
        this.app=express()
        this.port = process.env.PORT  
        this.usuariosPath = '/api/usuarios'
        this.authPath = '/api/auth'
        this.proveedoresPath = '/api/proveedores'
        this.comprasPath = '/api/compras'
        this.insumosPath = '/api/insumos'
        this.conetarDB()
        this.middlewares()
        this.routes()
    }
    async conetarDB () {
        await dbConnetion() 
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static('public')) 
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.authPath, require ('../routes/auth'))
        this.app.use(this.usuariosPath,require('../routes/usuario'));
        this.app.use(this.proveedoresPath,require('../routes/proveedor'));
        this.app.use(this.comprasPath,require('../routes/compra'));
        this.app.use(this.insumosPath,require('../routes/insumos'));
    }

    listen(){ 
        this.app.listen(this.port,(req, res)=>{
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }

}

module.exports=Server