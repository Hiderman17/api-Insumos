const express=require('express')
const cors = require('cors')
const {dbConnetion} =require('../database/config')



class Server{
    constructor(){
        this.app=express()
        this.port = process.env.port  
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
        this.app.use(this.insumosPath,require('../routes/insumos'));
    }

    listen(){ 
        this.app.listen(this.port,(req, res)=>{
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }

}

module.exports=Server