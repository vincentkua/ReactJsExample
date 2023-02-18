var express = require("express");
var bodyParser = require("body-parser");
var userDB = require("../model/user");
var genreDB = require("../model/genre");
var movieDB = require("../model/movie");
var verificationLib = require("../model/verifyToken");
var cors = require("cors")

//var categoryDB=require('../model/category');

var app = express();

app.options('*',cors()); //CORS policy to enable web api access from all urls
app.use(cors());

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser); //attach body-parser middleware
app.use(bodyParser.json()); //parse json data

//POST /user/login
app.post("/user/login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  userDB.loginUser(email, password, function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(`{"JWT":"${results}"}`);
    }
  });
});

//POST /movie/addmovie
app.post("/movie/addmovie", verificationLib.verifyToken, function (req, res) {
  if (req.role != "admin") {
    res.status(200);
    res.type("json");
    res.send(`{"Message":"Only Admin Are Allowed to Perform this task"}`);
  } else {
    var name = req.body.name;
    var description = req.body.description;
    var release_date = req.body.release_date;
    var image_url = req.body.image_url;
    var genre_id = req.body.genre_id;
    var active = req.body.active;

    movieDB.addMovie(
      name,
      description,
      release_date,
      image_url,
      genre_id,
      active,
      function (err, results) {
        if (err) {
          console.log(err);
          res.status(500);
          res.type("json");
          res.send(`{"Message":"Update failed"}`);
        } else {
          console.log(results);
          res.status(200);
          res.type("json");
          res.send(`{"Message":"${results.affectedRows} row(s) updated"}`);
        }
      }
    );
  }
});

//POST /genre/addgenre
app.post("/genre/addgenre", verificationLib.verifyToken, function (req, res) {
  if (req.role != "admin") {
    res.status(200);
    res.type("json");
    res.send(`{"Message":"Only Admin Are Allowed to Perform this task"}`);
  } else {
    var name = req.body.name;
    var description = req.body.description;
    genreDB.addGenre(name, description, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Update failed"}`);
      } else {
        console.log(results);
        res.status(200);
        res.type("json");
        res.send(`{"Message":"${results.affectedRows} row(s) updated"}`);
      }
    });
  }
});

//GET /user
//assume this is a protected resource that requires user login
app.get("/user", verificationLib.verifyToken, function (req, res) {
  if (req.role != "admin") {
    res.status(200);
    res.type("json");
    res.send(`{"Message":"Only Admin Are Allowed to Perform this task"}`);
  } else {
    userDB.getUsers(function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Retrieval failed"}`);
      } else {
        res.status(200);
        res.type("json");
        res.send(results);
      }
    });
  }
});

//GET /user/:userid
app.get("/user/:userid", verificationLib.verifyToken, function (req, res) {
  if (req.role != "admin") {
    res.status(200);
    res.type("json");
    res.send(`{"Message":"Only Admin Are Allowed to Perform this task"}`);
  } else {
    var userid = req.params.userid;
    userDB.get1User(userid, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Retrieval failed"}`);
      } else {
        res.status(200);
        res.type("json");
        res.send(results);
      }
    });
  }
});

//POST /user
app.post("/user", verificationLib.verifyToken, function (req, res) {
  if (req.role != "admin") {
    res.status(200);
    res.type("json");
    res.send(`{"Message":"Only Admin Are Allowed to Perform this task"}`);
  } else {
    var email = req.body.email;
    var name = req.body.name;
    var role = req.body.role;
    var password = req.body.password;

    userDB.insertUser(email, name, role, password, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Insertion failed"}`);
      } else {
        console.log(results);
        res.status(200);
        res.type("json");
        res.send(`{"Message":"${results.affectedRows} row(s) inserted"}`);
      }
    });
  }
});

//PUT /user/:userid
app.put("/user/:userid", verificationLib.verifyToken, function (req, res) {
  if (req.role != "admin") {
    res.status(200);
    res.type("json");
    res.send(`{"Message":"Only Admin Are Allowed to Perform this task"}`);
  } else {
    var user_id = req.params.userid;
    var email = req.body.email;
    var password = req.body.password;

    userDB.updateUser(email, password, user_id, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Update failed"}`);
      } else {
        console.log(results);
        res.status(200);
        res.type("json");
        res.send(`{"Message":"${results.affectedRows} row(s) updated"}`);
      }
    });
  }
});

//DELETE /user/:userid
app.delete("/user/:userid", verificationLib.verifyToken, function (req, res) {
  if (req.role != "admin") {
    res.status(200);
    res.type("json");
    res.send(`{"Message":"Only Admin Are Allowed to Perform this task"}`);
  } else {
    var user_id = req.params.userid;
    userDB.deleteUser(user_id, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Delete failed"}`);
      } else {
        res.status(200);
        res.type("json");
        res.send(`{"Message":"${results.affectedRows} row(s) deleted"}`);
      }
    });
  }
});

//GET /genre
//assume this is a public resource
app.get("/genre", function (req, res) {
  genreDB.getGenre(function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Retrieval failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//GET /movie
//assume this is a public resource
app.get("/movie", function (req, res) {
  movieDB.getMovie(function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Retrieval failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//GET /movie/active
//assume this is a public resource
app.get("/movie/active", function (req, res) {
  movieDB.getActiveMovie(function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Retrieval failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//GET /movie/substring/:moviesearch
//assume this is a public resource
app.get("/movie/substring/:moviesearch", function (req, res) {
  var moviesearch = req.params.moviesearch;
  movieDB.getMovieBySubstring(moviesearch, function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Retrieval failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//GET /movie/movieid/:movieid
//assume this is a public resource
app.get("/movie/movieid/:movieid", function (req, res) {
  var movie_id = req.params.movieid;
  movieDB.getMovieByMovieId(movie_id, function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Retrieval failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//GET /movie/genreid/:genre_id
//assume this is a public resource
app.get("/movie/genreid/:genre_id", function (req, res) {
  var genre_id = req.params.genre_id;
  movieDB.getMovieByGenreId(genre_id, function (err, results) {
    if (err) {
      console.log(err);
      res.status(500);
      res.type("json");
      res.send(`{"Message":"Retrieval failed"}`);
    } else {
      res.status(200);
      res.type("json");
      res.send(results);
    }
  });
});

//DELETE /movie/:movieid
app.delete("/movie/:movieid", verificationLib.verifyToken, function (req, res) {
  if (req.role != "admin") {
    res.status(200);
    res.type("json");
    res.send(`{"Message":"Only Admin Are Allowed to Perform this task"}`);
  } else {
    var movie_id = req.params.movieid;
    movieDB.deleteMovie(movie_id, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Delete failed"}`);
      } else {
        res.status(200);
        res.type("json");
        res.send(`{"Message":"${results.affectedRows} row(s) deleted"}`);
      }
    });
  }
});

//PUT /movie/:movieid
app.put("/movie/:movieid", verificationLib.verifyToken, function (req, res) {
  if (req.role != "admin") {
    res.status(200);
    res.type("json");
    res.send(`{"Message":"Only Admin Are Allowed to Perform this task"}`);
  } else {
    var movie_id = req.params.movieid;
    var name = req.body.name;
    var description = req.body.description;
    var release_date = req.body.release_date;
    var image_url = req.body.image_url;
    var genre_id = req.body.genre_id;
    var active = req.body.active;
    var date_inserted = req.body.date_inserted;

    movieDB.updateMovie(name,description,release_date,image_url,genre_id,active,date_inserted,movie_id, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Update failed"}`);
      } else {
        console.log(results);
        res.status(200);
        res.type("json");
        res.send(`{"Message":"${results.affectedRows} row(s) updated"}`);
      }
    });
  }
});


//DELETE /genre/:genreid
app.delete("/genre/:genreid", verificationLib.verifyToken, function (req, res) {
  if (req.role != "admin") {
    res.status(200);
    res.type("json");
    res.send(`{"Message":"Only Admin Are Allowed to Perform this task"}`);
  } else {
    var genre_id = req.params.genreid;
    genreDB.deleteGenre(genre_id, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500);
        res.type("json");
        res.send(`{"Message":"Delete failed"}`);
      } else {
        res.status(200);
        res.type("json");
        res.send(`{"Message":"${results.affectedRows} row(s) deleted"}`);
      }
    });
  }
});

module.exports = app;
