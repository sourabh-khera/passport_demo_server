const userController = require("./user.controller");

module.exports  = (app, loggedIn) => {
  app.post('/api/user/create',userController.createUser);
  app.get('/api/user/getUsers',loggedIn,userController.fetchUsers);
  app.delete('/api/user/delete',loggedIn,userController.deleteUser);
  app.post('/api/user/auth',userController.authenticateUser);

};
