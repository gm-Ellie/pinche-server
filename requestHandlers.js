var querystring = require("querystring");
var db = require('./db');

function start(response, postData) {
    db.connectMysql("select * from carForPeople", function (error, data) {
        response.writeHead(200, {
            "Content-Type": "application/json"
        });
        response.write(JSON.stringify({
            code: 0,
            msg: 'success',
            data
        }));
        response.end();
    });
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("You've sent: " + querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;