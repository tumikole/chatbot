const express = require("express");
const app = express();
const cors = require("cors");
const port = 3002;

const { myRoutes } = require("./Routes/MyRoutes");
app.use(express.json());
app.use(cors())
myRoutes(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));