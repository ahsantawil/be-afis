import Replace from '../models/ReplaceModel.js';
import { Op } from 'sequelize';

export const getReplace = async ( req, res ) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || '';
    const offset = limit * page;
    const totalRows = await Replace.count({
        where: {
            [Op.or]: [{sn: {
                [Op.like] : '%' +search+ '%'
            }}, {imei: {
                [Op.like] : '%' +search+ '%'
            }}, {do: {
                [Op.like] : '%' +search+ '%'
            }}]
        }
    });

    const totalPage = Math.ceil(totalRows / limit);
    const result = await Replace.findAll({
        where: {
            [Op.or]: [{sn: {
                [Op.like] : '%' +search+ '%'
            }}, {imei: {
                [Op.like] : '%' +search+ '%'
            }}, {do: {
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