var express = require('express');
var path = require('path');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var view_dir = path.join(__dirname, '../public/html');
	var index_path = path.join(view_dir, "index.html");
	res.sendFile(index_path);
});

module.exports = router;
