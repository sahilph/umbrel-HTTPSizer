const fs = require("fs");

function readFromFsOrTerminate(key) {
	const value = process.env[key];

	if(typeof(value) !== "string" || value.trim().length === 0) {
		console.error(`The env. variable '${key}' is not set. Terminating...`);

		process.exit(1);
	}

	fs.stat(value, function (err, stat) {
        if (err != null) {
			if (err.code === 'ENOENT') {
				// file does not exist
				console.error(`The file '${key}' does not exist. Terminating...`);
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

    HTTPS_KEY_PATH: readFromFsOrTerminate("HTTPS_KEY_PATH" || "/ssl/ssl.key"),
    HTTPS_CERT_PATH: readFromFsOrTerminate("HTTPS_CERT_PATH" || "/ssl/ssl.cert"),

});