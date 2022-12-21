import Claim from '../models/ClaimModel.js';
import { Op } from 'sequelize';

export const getClaim = async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || '';
    const offset = limit * page;
    const totalRows = await Claim.count({
        where: {
            [Op.or]: [{sn: {
                [Op.like] : '%'+search+'%'
            }}, {noklaim: {
                [Op.like] : '%'+search+'%'
            }}]
        }
    });

    const totalPage = Math.ceil(totalRows / limit);
    const result = await Claim.findAll({
        where: {
            [Op.or]: [{sn: {
                [Op.like] : '%'+search+'%'
            }}, {noklaim: {
                [Op.like] : '%'+search+'%'
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