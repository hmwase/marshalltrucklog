const { Sequelize } = require('sequelize');
import * as tedious from 'tedious';

const sequelize = new Sequelize('MarshallTruckingLog', 'sa', 'Jane1972', {
    host: 'PW741-A246US',
    dialect: 'mssql',
    dialectModule: tedious,
    dialectOptions: {
        options: {
            encrypt: true,
        },
    },
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

  
  
export default sequelize;
  