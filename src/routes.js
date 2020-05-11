const express = require("express");
const routes = express.Router();

const multer = require("multer");
const uploadConfig = require("./config/uploadConfig");
const upload = multer(uploadConfig);

const UploadController = require("./controllers/uploadController");

routes.post("/upload", upload.single("image"), UploadController.store);

module.exports = routes;
