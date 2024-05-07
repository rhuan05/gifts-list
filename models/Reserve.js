const mongoose = require('mongoose');

const ReserveSchema = new mongoose.Schema({
    fullName: String,
    product: String
});

const ReserveModel = mongoose.model('reserves', ReserveSchema);

module.exports = ReserveModel;