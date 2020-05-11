const cloudinary = require("../config/cloudinaryConfig");
const fs = require("fs");
module.exports = {
  async store(request, response) {
    const path = request.file.path;

    const uniqueFilename = new Date().toISOString();

    await cloudinary.uploader.upload(
      path,
      { public_id: `omnistack07/${uniqueFilename}` },
      function (err, image) {
        if (err) {
          console.warn(err);
        } else {
          // console.log("image:", image);
          fs.unlinkSync(path);
          return response.json(image);
        }
      }
    );
  },
};
