import Getmovie from "./Getmovie.js";
import Login from "./Login.js";
import Addmovie from "./Addmovie.js";
function App(props) {
  const [JWTtoken, setJWTtoken] = React.useState("");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Login, {
    setJWTtoken: setJWTtoken
  }), /*#__PURE__*/React.createElement(Addmovie, {
    JWTtoken: JWTtoken
  }), /*#__PURE__*/React.createElement(Getmovie, {
    JWTtoken: JWTtoken
  }));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));