const Mongoose  = require("mongoose");

const UserSchema = new Mongoose.Schema({
   Email: {
       type: String,
       required: true,
   },
   FirstName: {
       type: String,
       required: true,
   },
    LastName: {
        type: String,
        required: true,
    }
},{versionKey: false});

module.exports = Mongoose.model('User', UserSchema);
