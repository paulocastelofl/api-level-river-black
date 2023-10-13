const Level = require('./models/level');
const UserToken = require('./models/usertokens');
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {

    app.get('/levels/:token', async (req, res) => {
        /* #swagger.tags = ['Levels']
          #swagger.description = 'Get Levels of Rio Negro' */
        try {
            var token = req.params.token;
            const isvaliduser = await UserToken.findOne({Token: token});

            if(isvaliduser){
                const levels = await Level.find({});
                return res.json(levels);
            }else{
                return res.status(401).json({ error: "Not authorized" });
            }
            
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    })

    app.post('/sign-in', async (req, res) => {
        /* #swagger.tags = ['Acess User']
           #swagger.description = 'Create token acess.' */

        /* #swagger.parameters['token'] = {
               in: 'body',
               required: true,
               schema: { $ref: "#/definitions/AddUserToken" }
        } */
        try {
            const params = req.body
           
            const usertoken = await UserToken.create({
                Name: params.name,
                Token: params.token
            });

            return res.json(usertoken);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    })

    app.delete('/sign-out/:token', async (req, res) => {
        /* #swagger.tags = ['Acess User']
           #swagger.description = 'Delete token acess.' */
        try {
            await UserToken.deleteOne({Token: req.params.token});
 
            return res.json({
                message: "Succsess Delete"
            });
         } catch (err) {
             return res.status(400).json({ error: err.message });
         }
    })
}