const fs = require("fs");

function readFromFsOrTerminate(value) {
	fs.stat(value, function (err, stat) {
        if (err != null) {
			if (err.code === 'ENOENT') {
				// file does not exist
				console.error(`The file '${value}' does not exist. Terminating...`);
			} else {
				console.error('Some error occured. Error Code: ', err.code);
			}
			process.exit(1);
		}
    });
	return value;
}


module.exports = Object.freeze({
    PORT: parseInt(process.env.PORT) || 3000,

    APP_DATA_PATH: process.env.APP_DATA_PATH || "/app-data",

    HTTPS_ROOT_CA_CERT_PATH: readFromFsOrTerminate(process.env.HTTPS_ROOT_CA_CERT_PATH || "/ssl/root-ca.crt"),

});