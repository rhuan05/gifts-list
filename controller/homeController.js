const ReserveModel = require('../models/Reserve');
const ProductModel = require('../models/Product');
let erro = '';

exports.renderHome = async (req, res) => {
    const productsInDB = await ProductModel.find().sort({ chosen: 1 });
    res.render('home', { produtos: productsInDB, erro: erro, status: '' });
};

exports.reserve = async (req, res) => {
    var productsInDB = await ProductModel.find().sort({ chosen: 1 });
    const reserva = req.body;

    if(!reserva.nomeCompleto){
        erro = 'Preencha o seu nome para reservar';
        res.render('home', { produtos: productsInDB, erro: erro, status: 'nomeNulo'  });
        return;
    }else{
        erro = '';
    }

    try{
        await ProductModel.updateOne({ productName: reserva.produtoSelecionado }, { $set: { chosen: true, people: reserva.nomeCompleto } });
        productsInDB = await ProductModel.find().sort({ chosen: 1 });
        res.render('home', { produtos: productsInDB, erro: erro, status: 'reserve' });
    }catch(error){
        console.log('DEU RUIM AO FAZER UMA RESERVA: ' + error);
    }
};