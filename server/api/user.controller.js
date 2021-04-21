const userService = require("./user.service");
const jwt = require('jsonwebtoken');
exports.createUser = (req, res) => {
    const userDetails = req.body;
    userService.userExist(userDetails)
    .then(user => {
        if (user) {
            res.send("User already exist")
        }
        else {
            userService.userEntry(userDetails)
            .then((created) => {
                res.send(created)
            })
            .catch(err => {
                res.send(err)
            })
        }
    })
    .catch(err => {
        res.send(err)
    })
};

exports.fetchUsers = (req, res) => {
    userService.totalUsers()
        .then((users) => {
            res.send(users)
        })
        .catch(err => {
            res.send(err)
        })
};

exports.deleteUser = (req, res) => {
    const userDetails = req.body;
    userService.removeUser(userDetails)
        .then(deleted => {
            if(deleted){
                res.send("user deleted successfully")
            }
            else{
                res.send("user not found");
            }
        })
        .catch(err => {
            res.send(err)
        })
};
exports.authenticateUser = (req, res) => {
    const userDetails = req.body;
    userService.userExist(userDetails)
        .then(user => {
            if(user){
               const token = jwt.sign({userEmail: user.Email}, 'Nothing_Is_Impossible', { expiresIn: '24h'});
               console.log(token);
            }
            else{
                res.send("user not found");
            }
        })
        .catch(err => {
            res.send(err)
        })
};


