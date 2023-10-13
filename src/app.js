const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');
require("./connections/database.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require('./endpoints')(app)

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log("Calling app.listen's callback function.");
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});