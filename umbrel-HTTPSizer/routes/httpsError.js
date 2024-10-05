const express = require('express');
const router = express.Router();

/* GET HTTPS Error page. */
router.get('/', function (req, res, next) {
    res.render('httpsError', {title: 'Umbrel HTTPSizer - HTTPS Error', hostname: req.headers.host, hostname_wo_port: req.hostname});
});

module.exports = router;
