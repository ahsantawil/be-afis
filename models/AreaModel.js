import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Uiw from '../models/UiwModel.js';

const { DataTypes } = Sequelize;

const Area = db.define('area', {
    name : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    uiw : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    uiwId : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
         }
    }
}, {
    freezeTableName: true
});

Uiw.hasMany(Area);
Area.belongsTo(Uiw, {foreignKey: 'uiwId'});

export default Area;