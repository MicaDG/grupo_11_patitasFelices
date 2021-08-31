const express = require('express');
const app = express();
const path = require('path');
const port = 3030

const indexRouter = require("./routes/index");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(port, () => console.log('Server listening on ' + port));