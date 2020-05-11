const multer = require("multer");

module.exports = {
  storage: new multer.diskStorage({
    // onde a imagem será salva em seu computador
    destination: function (req, file, cb) {
      cb(null, "./src/uploads/");
    },
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
};
