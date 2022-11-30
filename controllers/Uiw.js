import Uiw from '../models/UiwModel.js';

export const getUiw = async(req, res) => {
    try {
        const response  = await Uiw.findAll({
            attributes: [ 'id', 'name']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
};

export const getUiwById = async( req, res ) => {
    try {
        const response = await Uiw.findOne({
            attributes: [ 'id', 'name' ],
            where : {
                id: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

export const addUiw = async( req, res ) => {
    const { name } = req.body;
    try {
        await Uiw.create({
            name: name
        });
        res.status(201).json({msg: 'Data Berhasil disimpan'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
};

export const updateUiw = async(req, res) => {
    const uiw = await Uiw.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!uiw) return res.status(404).json({msg: 'Data tidak ditemukan'});
    const { name } = req.body;
    try {
        await Uiw.update({
            name: name
        },{
            where: {
                id: uiw.id
            }
        });
        res.status(200).json({msg: 'Uiw Updated'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
};

export const deleteUiw = async(req, res) => {
    const uiw = await Uiw.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!uiw) return res.status(404).json({msg: 'Data tidak ditemukan'});
    try {
        await Uiw.destroy({
            where: {
                id: uiw.id
            }
        });
        res.status(200).json({msg: 'Uiw deleted'})
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
};