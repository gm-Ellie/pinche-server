var mysql = require('mysql');

function connectMysql(sql, callback) {
    var db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mt12345',
        database: 'pinche'
    });
    db.connect();
    db.query(sql, callback);
    db.end();
};
exports.connectMysql = connectMysql;