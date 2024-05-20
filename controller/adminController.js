const ProductModel = require('../models/Product');
let erro = '';

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'loja-material-de-constru-o', 
    api_key: '296972434362674',
    api_secret: 'T_P09tSY_JrcI94scK86gTPaWYc'
});

exports.renderAdmin = async (req, res) => {
    const productsInDB = await ProductModel.find();
    res.render('admin', { produtos: productsInDB, erro: erro });
};

exports.addProduct = async (req, res) => {
    const product = req.body;

    if(!product.nameProduct){
        const productsInDB = await ProductModel.find();
        erro = 'Preencha o nome do produto para cria-lo'
        res.render('admin', { produto: productsInDB, erro: erro });
        return;
    }
    
    if(!req.file.originalname){
        const productsInDB = await ProductModel.find();
        erro = 'Adicione uma imagem para criar o produto';
        res.render('admin', { produto: productsInDB, erro: erro });
        return;
    }

    try{
        cloudinary.uploader.upload(`./uploads/${req.file.originalname}`, {
            resource_type: 'image'
        })
        .then(async (link) => {
            const productForDB = new ProductModel({
                productName: product.nameProduct, 
                img: link.url,
                chosen: false,
                people: ''
        });

        try{
            await productForDB.save();
            const productsInDB = await ProductModel.find();
            res.redirect('/admin');
        }catch(error){
            console.log('DEU RUIM NO CADASTRO DO PRODUTO.');
            console.log(error);
        }
    })
    }catch(err){
        console.log('Erro: ', err);
    }

};

exports.deleteProduct = async (req, res) => {
    const id = req.body.id;

    await ProductModel.findByIdAndRemove(id);
    res.redirect('/admin');
};