const mongoose = require('mongoose');

const UserTokenSchema = new mongoose.Schema({
    Name: {
        type: "String",
        require: true
    },
    Token: {
        type: "String",
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('usertoken', UserTokenSchema);