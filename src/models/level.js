const mongoose = require('mongoose');

const LevelSchema = new mongoose.Schema({
    _id: {
        type: "String",
        require: true
    },
    Dia: {
        type: "String",
        require: true
    },
    Mes: {
        type: "String",
        require: true
    },
    Cota: {
        type: "String",
        require: true
    },
    EncheuVazou: {
        type: "String",
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('level', LevelSchema);