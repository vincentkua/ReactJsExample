export default function Addmovie(props) {
  const JWTtoken = "Bearer " + props.JWTtoken;
  const [moviename, setmoviename] = React.useState("New Movie Test");
  const [description, setdescription] = React.useState("Lorem Ipsum Set Amet");
  const [releaseddate, setreleaseddate] = React.useState("2009-12-18 00:00:00");
  const [imgurl, setimgurl] = React.useState("movie1.jpg");
  const [genreid, setgenreid] = React.useState(3);
  const [active, setactive] = React.useState("Y");
  function addmovie() {
    console.log("test addmovie");
    fetch("http://127.0.0.1:8081/movie/addmovie", {
      method: "POST",
      body: JSON.stringify({
        name: moviename,
        description: description,
        release_date: releaseddate,
        image_url: imgurl,
        genre_id: genreid,
        active: active
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: JWTtoken
      }
    }).then(function (response) {
      if (response.status === 403) {
        alert("Invalid JWT Token... Please Login to Perform this Task...");
      }
      return response.json();
    }).then(function (body) {
      console.log(body);
      // setmovie(body);
    }).catch(error => console.log("error", error));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Add Movie"), "Movie Name:", " ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "",
    id: "tf-moviename",
    value: moviename,
    onChange: e => setmoviename(e.target.value)
  }), " ", /*#__PURE__*/React.createElement("br", null), "Description:", " ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "",
    id: "tf-description",
    value: description,
    onChange: e => setdescription(e.target.value)
  }), /*#__PURE__*/React.createElement("br", null), "Release Date:", " ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "",
    id: "tf-releaseddate",
    value: releaseddate,
    onChange: e => setreleaseddate(e.target.value)
  }), /*#__PURE__*/React.createElement("br", null), "Image Url:", " ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "",
    id: "tf-imgurl",
    value: imgurl,
    onChange: e => setimgurl(e.target.value)
  }), /*#__PURE__*/React.createElement("br", null), "Genre ID:", " ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "",
    id: "tf-genreid",
    value: genreid,
    onChange: e => setgenreid(e.target.value)
  }), /*#__PURE__*/React.createElement("br", null), "Active:", " ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "",
    id: "tf-active",
    value: active,
    onChange: e => setactive(e.target.value)
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: () => addmovie()
  }, "Add Movie"), /*#__PURE__*/React.createElement("hr", null));
}