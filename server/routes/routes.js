const userRoutes = require('../api/user.routes');
const cors = require("cors");
const jwt = require('jsonwebtoken');
const loggedIn = (req, res, next) => {
   const token = req.headers.authorization;
   if(token){
       jwt.verify(token,'Nothing_Is_Impossible', (err, decode) => {
       if(err){
           res.status(500).send('invalid token');
       }else{
           const decodeData = jwt.decode(token);
           req.email = decodeData.userEmail;
           next();
       }
   });
   }else{
       res.send(' plz send the token');
   }

};
module.exports = (app) => {
  app.use(cors());
  userRoutes(app, loggedIn);
};
