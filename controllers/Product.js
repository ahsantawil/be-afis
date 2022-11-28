import Product from '../models/ProductModel.js';

export const getProduct = async (req, res) => {
    try {
        const response = await Product.findAll({
            attributes: [
                'id', 'type', 'spec', 'desc'
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: 'Product tidak ditemukan'});
        let response = await Product.findOne({
            attributes: ['id', 'type', 'spec', 'desc'],
            where: {
                id: product.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};