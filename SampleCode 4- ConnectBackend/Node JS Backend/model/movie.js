var dbConfig = require("./databaseConfig");

var movieDB = {

    getMovie: function (callback) {

        var dbConn = dbConfig.getConnection();

        dbConn.connect(function (err) {

            if (err) {
                return callback(err, null);
            } else {

                var sql = "select * from movie_table";

                dbConn.query(sql, [], function (err, results) {

                    dbConn.end();
                    return callback(err, results);
                });
            }


        });
    },

    getActiveMovie: function (callback) {

        var dbConn = dbConfig.getConnection();

        dbConn.connect(function (err) {

            if (err) {
                return callback(err, null);
            } else {

                var sql = "select * from movie_table where active = 'Y'";

                dbConn.query(sql, [], function (err, results) {

                    dbConn.end();
                    return callback(err, results);
                });
            }


        });
    },

    getMovieBySubstring: function (moviesearch,callback) {

        var dbConn = dbConfig.getConnection();

        dbConn.connect(function (err) {

            if (err) {
                return callback(err, null);
            } else {

                var sql = "SELECT * FROM movie_table WHERE name LIKE ? ORDER BY release_date ASC;"; //DESC for Descending order

                dbConn.query(sql, ['%'+moviesearch+'%'], function (err, results) {

                    dbConn.end();
                    return callback(err, results);
                });
            }


        });
    },

    getMovieByMovieId: function (movie_id,callback) {

      var dbConn = dbConfig.getConnection();

      dbConn.connect(function (err) {

          if (err) {
              return callback(err, null);
          } else {

              var sql = "SELECT * FROM movie_table WHERE movie_id = ? ORDER BY release_date ASC";

              dbConn.query(sql, [movie_id], function (err, results) {

                  dbConn.end();
                  return callback(err, results);
              });
          }


      });
  },

    getMovieByGenreId: function (genre_id,callback) {

        var dbConn = dbConfig.getConnection();

        dbConn.connect(function (err) {

            if (err) {
                return callback(err, null);
            } else {

                var sql = "SELECT * FROM movie_table WHERE genre_id = ? ORDER BY release_date ASC";

                dbConn.query(sql, [genre_id], function (err, results) {

                    dbConn.end();
                    return callback(err, results);
                });
            }


        });
    },

    addMovie: function (name,description,release_date,image_url,genre_id,active, callback) {
        var dbConn = dbConfig.getConnection();
    
        dbConn.connect(function (err) {
          if (err) {
            return callback(err, null);
          } else {
            var sql =
              "insert into movie_table(name,description,release_date,image_url,genre_id,active) values(?,?,?,?,?,?)";
    
            dbConn.query(
              sql,
              [name,description,release_date,image_url,genre_id,active],
              function (err, results) {
                dbConn.end();
                return callback(err, results);
              }
            );
          }
        });
      },

      deleteMovie: function (movie_id, callback) {
        var dbConn = dbConfig.getConnection();
    
        dbConn.connect(function (err) {
          if (err) {
            return callback(err, null);
          } else {
            var sql = "delete from movie_table where movie_id=?";
    
            dbConn.query(sql, [movie_id], function (err, results) {
              dbConn.end();
              return callback(err, results);
            });
          }
        });
      },

      updateMovie: function (name, description,release_date,image_url,genre_id, active,date_inserted, movie_id, callback) {
        var dbConn = dbConfig.getConnection();
    
        dbConn.connect(function (err) {
          if (err) {
            return callback(err, null);
          } else {
            var sql = "update movie_table set name=?, description=?,release_date=?,image_url=?,genre_id=?, active=?,date_inserted=? where movie_id=?";
    
            dbConn.query(sql, [name, description,release_date,image_url,genre_id, active,date_inserted, movie_id], function (err, results) {
              dbConn.end();
              return callback(err, results);
            });
          }
        });
      },

}
module.exports=movieDB;