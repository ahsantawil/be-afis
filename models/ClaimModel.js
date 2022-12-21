import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Claim = db.define('claim', {
    sn: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    uiw: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    area: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    noklaim: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    nosurat: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    tgl_klaim: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    product: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    }
}, {
    freezeTableName: true
});

export default Claim;