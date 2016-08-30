var express = require('express');
var path = require('path');
var fs = require('fs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var view_dir = path.join(__dirname, '../public/html');
	var index_path = path.join(view_dir, "index.html");
	res.sendFile(index_path);
});

router.get('/templates', function(req, res, next) {
	var dir = path.join(__dirname, "../../json");
	var template_path = path.join(dir, "templates.json");

	var tmp = fs.readFileSync(template_path, 'utf8');

	var obj = JSON.parse(tmp);

	res.send(obj);
});


module.exports = router;
