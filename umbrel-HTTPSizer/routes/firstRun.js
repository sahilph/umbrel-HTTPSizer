const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require("path");
const CONSTANTS = require('../utils/const.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    if(req.query.redirectHome === 'false'){
       res.render('firstRun', {title: 'Umbrel HTTPSizer - First Run', hostname: req.headers.host, hostname_wo_port: req.hostname});
    }
    else {
        const firstRunPath = path.join(CONSTANTS.APP_DATA_PATH, "/first-run-done");
        fs.stat(firstRunPath, function (err, stat) {
            if (err == null) {
                console.log('First Run Already Done. Redirection to Home');
                res.redirect("/")
            } else if (err.code === 'ENOENT') {
                // file does not exist
                console.log('Rendering First Run');
                fs.closeSync(fs.openSync(firstRunPath, 'w'));
                res.render('firstRun', {title: 'Umbrel HTTPSizer - First Run', hostname: req.headers.host, hostname_wo_port: req.hostname});
            } else {
                console.log('Error: ', err.code);
            }
        });

    }
});

module.exports = router;
