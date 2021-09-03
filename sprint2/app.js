const express = require('express');
const app = express();
const path = require('path');
const port = 3030

const indexRouter = require("./routes/index");
const product = require("./routes/productDetail");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", product);

app.listen(port, () => console.log('Server listening on ' + port));