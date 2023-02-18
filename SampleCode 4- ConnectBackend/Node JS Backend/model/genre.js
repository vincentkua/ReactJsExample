var dbConfig = require("./databaseConfig");

var genreDB = {
  getGenre: function (callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from genre_table";

        dbConn.query(sql, [], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },

  addGenre: function (name, description, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "insert into genre_table(name,description) values(?,?)";

        dbConn.query(sql, [name, description], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },

  deleteGenre: function (genre_id, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "delete from genre_table where genre_id=?";

        dbConn.query(sql, [genre_id], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },
};
module.exports = genreDB;
