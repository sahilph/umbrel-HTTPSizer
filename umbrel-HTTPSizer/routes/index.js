const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const CONSTANTS = require('../utils/const.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    const firstRunPath = path.join(CONSTANTS.APP_DATA_PATH , "/first-run-done");
    fs.stat(firstRunPath, function (err, stat) {
        if (err == null) {
            console.log('First Run Already Done');
            res.render('index', {title: 'Umbrel HTTPSizer', hostname: req.headers.host});
        } else if (err.code === 'ENOENT') {
            // file does not exist
            console.log('Loading First Run');
            res.redirect("/first-run")
        } else {
            console.log('Error: ', err.code);
        }
    });


});

module.exports = router;
