import { Sequelize } from 'sequelize';

const db = new Sequelize('afs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
})

export default db;