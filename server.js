const express = require("express");
const fileUpload = require("express-fileUpload");

const app = express();

app.use(fileUpload());

app.post("/upload", (req, res) => {
  return res.status(400).jsonp({ msg: "No file was uploaded" });

  const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
  });
});

app.listen(5000, () => console.log("Server started..."));
