var mysql = require('mysql');

var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Lyn!91195084",
            database: "spmovies"
        });     
        return conn;
    }
};
module.exports = dbconnect
