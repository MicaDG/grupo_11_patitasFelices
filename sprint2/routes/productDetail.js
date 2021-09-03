const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/productDetail", (req,res) => res.sendFile(path.join(__dirname,"..", "views", "productDetail.html")));

module.exports = router;