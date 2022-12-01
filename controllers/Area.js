import Area from '../models/AreaModel.js';

export const getArea = async(req, res) => {
    try {
        const response = await Area.findAll({
            attributes : ['id', 'name', 'uiw' ],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getAreaById = async(req, res) => {
    try {
        const response = await Area.findOne({
            attributes: ['id', 'name', 'uiw'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

export const addArea = async (req, res) => {
    const { name, uiw } = req.body;
    try {
        await Area.create({
            name: name,
            uiw: uiw
        });
        res.status(201).json({msg: 'Data berhasil disimpan'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
};

export const updateArea = async ( req, res ) => {
    const area = await Area.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!area) return res.status(404).json({msg: 'Data Tidak ditemukan'});
    const { name , uiw } = req.body;
    try {
        await Area.update({
            name: name,
            uiw: uiw
        }, {
            where: {
                id: area.id
            }
        });
        res.status(200).json({msg: 'Area Updated'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
};

export const deleteArea = async (req, res) => {
    const area = await Area.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!area) return res.status(404).json({msg: 'Data Tidak ditemukan'});
    try {
        await Area.destroy({
            where: {
                id: area.id
            }
        });
        res.status(200).json({msg: 'Area Deleted'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
};