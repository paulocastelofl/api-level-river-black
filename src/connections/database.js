const mongoose = require('mongoose');

module.exports = mongoose.connect(
    'mongodb://127.0.0.1:27017/levelBlackRiver',
    { useUnifiedTopology: true, useNewUrlParser: true }
).then(() => {
    console.log('Connect MongoDB Succses!')
}).catch((error) => console.log('Connect MongoDB Fail. ' + error))