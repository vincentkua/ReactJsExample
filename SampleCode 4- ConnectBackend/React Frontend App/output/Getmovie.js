export default function Getmovie(props) {
  const JWTtoken = "Bearer " + props.JWTtoken;
  function deletemovie(movieid) {
    console.log("Deleting movie id = " + movieid);
    fetch("http://127.0.0.1:8081/movie/" + movieid, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: JWTtoken
      }
    }).then(function (response) {
      return response.json();
    }).then(function (body) {
      console.log(body);
      fetchmovie();
    });
  }
  const [mymovie, setmovie] = React.useState([
    // {
    //   movie_id: 1,
    //   name: "Sample Header",
    //   description:
    //     "Sample Description",
    //   release_date: "2022-10-21T00:00:00.000Z",
    //   image_url: "movie1.jpg",
    //   genre_id: 3,
    //   active: "Y",
    //   date_inserted: "2022-12-16T21:05:39.000Z",
    // },
  ]);
  const maparraylist = mymovie.map(movie => /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid black",
      padding: "0px 8px 8px 8px",
      margin: "4px 0 0 0"
    }
  }, /*#__PURE__*/React.createElement("h4", null, movie.name), /*#__PURE__*/React.createElement("p", null, movie.description), /*#__PURE__*/React.createElement("button", {
    onClick: () => deletemovie(movie.movie_id)
  }, "Delete")));
  function fetchmovie() {
    console.log("Retrieve Movie List From Database...");
    fetch("http://127.0.0.1:8081/movie").then(function (response) {
      return response.json();
    }).then(function (body) {
      // console.log(body);
      setmovie(body);
    });
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Movie Page ", /*#__PURE__*/React.createElement("button", {
    onClick: () => fetchmovie()
  }, "Fetch Movie")), maparraylist);
}