import Delivery from '../models/DeliveryModel.js';
import { Op } from 'sequelize';


export const getDelivery = async (req, res) => {
    const page = parseInt(req.query.page) || 0 ;
    const limit = parseInt(req.query.limit) || 10 ;
    const search = req.query.search_query || '';
    const offset = limit * page ;
    const totalRows = await Delivery.count({
        where: {
            [Op.or]: [{sn: {
                [Op.like] : '%' +search+ '%'
            }}, {nospb: {
                [Op.like] : '%' +search+ '%'
            }}]
        }
    });

    const totalPage = Math.ceil(totalRows / limit);
    const result = await Delivery.findAll({
        where: {
            [Op.or]: [{sn: {
                [Op.like] : '%' +search+ '%'
            }}, {nospb: {
                [Op.like] : '%' +search+ '%'
            }}]
        },
        offset: offset,
        limit: limit,
        order: [
            ['id', 'DESC']
        ]
    });

    res.json({
        result: result,
        page: page,
        limit: limit,
        totalRows: totalRows,
        totalPage: totalPage
    });
};