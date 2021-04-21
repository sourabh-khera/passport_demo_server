const express = require("express");
const routes = require("./routes/routes");
require("./configuraion/dataSource");
const app = express();
app.use(express.json());
routes(app);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server is listening on port number------>", PORT);
});
