const express = require("express");
const webpack = require("webpack");
const bodyParser = require("body-parser");
const webpackconfig = require("../../webpack.config");
const webpackMiddleware = require("webpack-dev-middleware");
const compiler = webpack(webpackconfig);
const routes = require("./routes/routes");
require("./configuraion/dataSource");
const app = express();
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
}));
app.use(bodyParser());
routes(app);

const PORT = 3000;


app.listen(PORT,()=>{
console.log("server is listening on port number------>",PORT)
});
