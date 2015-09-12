var express = require('express');
var router = express.Router();
var fs = require("fs"),
    json;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/1', function(req, res, next) {
  json = getConfig('../data1.json');


  res.send(json);
});





function readJsonFileSync(filepath, encoding){

  if (typeof (encoding) == 'undefined'){
    encoding = 'utf8';
  }
  var file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}

function getConfig(file){

  var filepath = __dirname + '/' + file;
  return readJsonFileSync(filepath);
}

//assume that config.json is in application root


module.exports = router;
