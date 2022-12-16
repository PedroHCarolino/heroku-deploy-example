const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String,
    preco: { type: String, required: true },
});

module.exports = mongoose.model('Produto', produtoSchema)