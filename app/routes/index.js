"use strict"

let express = require('express');
let path = require('path');
let fs = require('fs');

let router = express.Router();

/**
 * Get Javascript object from templates.json file
 */  
function getJSONObject() {
	let  dir = path.join(__dirname, "../../json");
	let  template_path = path.join(dir, "templates.json");

	let  tmp = fs.readFileSync(template_path, 'utf8');

	return JSON.parse(tmp);
};

/**
 * Route definitions
 */ 

router.get('/', function(req, res, next) {
	let view_dir = path.join(__dirname, '../public/html');
	let index_path = path.join(view_dir, "index.html");
	res.sendFile(index_path);
});

router.get('/templates', function(req, res, next) {
    let obj = getJSONObject();
	res.send(obj);
});

router.get('/templates/restaurant', function(req, res, next) {
    let obj = getJSONObject();
	res.send(obj.tp_restaurant);
});

module.exports = router;
