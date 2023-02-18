var dbConfig = require("./databaseConfig");
var config = require("./config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

var db = {
  getUsers: function (callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from user_table";

        dbConn.query(sql, [], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },

  get1User: function (userid, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from user_table where user_id=?";

        dbConn.query(sql, [userid], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },

  insertUser: function (email, name, role, password, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql =
          "insert into user_table (email,name,role,password) values (?,?,?,?)";

        bcrypt.hash(password, 10, function (err, hash) {
          if (err) {
            return callback(err, null);
          } else {
            password = hash;
            dbConn.query(
              sql,
              [email, name, role, password],
              function (err, results) {
                dbConn.end();
                return callback(err, results);
              }
            );
          }
        });
      }
    });
  },

  updateUser: function (email, password, user_id, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "update user_table set email=?,password=? where user_id=?";

        dbConn.query(sql, [email, password, user_id], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },

  deleteUser: function (user_id, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "delete from user_table where user_id=?";

        dbConn.query(sql, [user_id], function (err, results) {
          dbConn.end();
          return callback(err, results);
        });
      }
    });
  },

  loginUser: function (email, password, callback) {
    var dbConn = dbConfig.getConnection();

    dbConn.connect(function (err) {
      if (err) {
        return callback(err, null);
      } else {
        var sql = "select * from user_table where email=?";
        dbConn.query(sql, [email], function (err, results) {
          dbConn.end();
          hashedpassword = "";
          if (results.length == 1) {
            hashedpassword = results[0].password;
          }
          bcrypt.compare(password, hashedpassword, function (err, result) {
            if (result) {
              var token = "";
              token = jwt.sign(
                { userid: results[0].userid, role: results[0].role },
                config.secretKey,
                { expiresIn: 2592000 } // 30days x 24 hours x 60 minutes X 60 sec
              );
            } else {
              token = "invalid user and password";
            }

            return callback(null, token);
          });
        });
      }
    });
  },
};

module.exports = db;
