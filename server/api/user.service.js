const userModel = require('./user.schema');

exports.userEntry = (userDetails) => {
    return new Promise((resolve, reject) => {
        userModel.create({
            Email: userDetails.email,
            FirstName: userDetails.fName,
            LastName: userDetails.lName
        },(err, user) => {
            if(err){
                reject(err)
            }
            console.log(user);
            resolve(true)
        })
    })
};
exports.totalUsers = () => {
    return new Promise((resolve, reject) => {
        userModel.find((err, users) => {
            if(err){
                reject(err)
            }
            resolve(users)
        })
    })
};

exports.userExist = (userInfo) => {
    return new Promise((resolve, reject) => {
        userModel.findOne({Email: userInfo.email},(err, user) => {
            if(err){
                reject(err)
            }
            console.log(user)
            resolve(user)
        })
    })
};

exports.removeUser = (userInfo) => {
    return new Promise((resolve, reject) => {
        userModel.remove({Email: userInfo.email},(err, user) => {
            if(err){
                reject(err)
            }else if(user.n){
                resolve(true)
            }else{
                resolve(false)
            }
        })
    })
};

