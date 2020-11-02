///*** Developer Halli Han BADEM ***/


const express = require("express");
const api = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
var path = require("path");


api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use((req, res, next) => {
  console.log(`${req.ip} IP adresi istek attı...`);
  next();
});


api.use(express.static('public'));


api.get("*", (req, res, next) => {
	res.sendFile(path.join(__dirname + '/index.html'));
  });




api.listen(port, () => {
  console.log("Sunucu başlatıldı.");
});

