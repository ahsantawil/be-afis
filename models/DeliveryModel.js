import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Delivery = db.define('delivery', {
    sn: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    imei: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    nobox: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    nospb: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    tgl_kirim: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    garansi: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 150]
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
    product: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    qty: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
}, {
    freezeTableName: true
});

export default Delivery;