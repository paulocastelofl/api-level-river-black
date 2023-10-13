const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./endpoints.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "API Levels of Rio Negro - AM",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        AddUserToken: {
            $name: "Jhon Doe",
            $token: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js')
})