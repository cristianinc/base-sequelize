const { Sequelize } = require('sequelize');


const db = new Sequelize('sietep_contable', 'root', 'password', {
    host: 'localhost',
    dialect:  'mariadb'
  });


// const getConecction = async() => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }


// const closeConnection = () => {
//     sequelize.close();
// }



module.exports = { db };