const express = require('express')
const cors = require('cors');
const { db } = require('../database/database');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.customerSupplierPath = '/api/customerSupplier';
        this.productsPath = '/api/products';
        this.database();
        this.middlewares();
        this.routes();
    }


    middlewares(){
        this.app.use( express.json() );
        this.app.use( cors() );
    }

    routes(){

        this.app.use(this.customerSupplierPath, require('../routes/customerSuppliers'));
        this.app.use(this.productsPath, require('../routes/products'));
    }

    listen(){
        this.app.listen( this.port , () => {
            console.log('Servidor iniciado en el puerto ', this.port)
          });
    }

    async database(){
        try {
            await db.authenticate();
            console.log('base de datos online');
        } catch (error) {
            throw new Error (error);
        }
    }

}


module.exports = Server;