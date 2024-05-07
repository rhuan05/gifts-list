const ReserveModel = require('../models/Reserve');
let erro = '';

exports.renderHome = async (req, res) => {
    res.render('home', { erro: erro, status: '' });
};

exports.reserve = async (req, res) => {
    const reserva = req.body;

    if(!reserva.nomeCompleto){
        erro = 'Preencha o seu nome para reservar';
        res.render('home', { erro: erro });
        return;
    }else{
        erro = '';
    }

    const reserveDB = new ReserveModel({
        fullName: reserva.nomeCompleto,
        product: reserva.product
    });

    try{
        console.log(req.body);
        await reserveDB.save();
        res.render('home', { erro: erro, status: 'reserve' });
    }catch(error){
        console.log('DEU RUIM AO FAZER UMA RESERVA: ' + error);
    }
};