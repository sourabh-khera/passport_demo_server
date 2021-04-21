const Mongoose  = require("mongoose");

Mongoose.connect("mongodb://localhost/userInfo");

(() => {
    Mongoose.connection.on("open" , (err, data) => {
        console.log("connection made ------>")
    });

    Mongoose.connection.on("error" , (err, data) => {
        console.log("connection not successful ------>",err);
    });
})();
