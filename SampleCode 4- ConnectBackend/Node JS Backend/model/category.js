var dbConfig = require("./databaseConfig");

var categoryDB = {

    getCategory: function (callback) {

        var dbConn = dbConfig.getConnection();

        dbConn.connect(function (err) {

            if (err) {
                return callback(err, null);
            } else {

                var sql = "select * from category";

                dbConn.query(sql, [], function (err, results) {

                    dbConn.end();
                    return callback(err, results);
                });
            }


        });
    }

}
module.exports=categoryDB;