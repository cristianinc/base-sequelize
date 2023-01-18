require('dotenv').config();

const Server = require('./models/server');


const server = new Server;



server.listen();
//https://github.com/cristianinc/base-sequelize