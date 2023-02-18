export default function Login(props) {
  const setJWTtoken = props.setJWTtoken;
  const [username, setusername] = React.useState("spadmin@gmail.com");
  const [password, setpassword] = React.useState("xyz123");
  function login() {
    console.log("Submit and Updating JWT Token");
    fetch("http://127.0.0.1:8081/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: document.getElementById("tf-username").value,
        password: document.getElementById("tf-password").value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (body) {
      console.log(body.JWT);
      setJWTtoken(body.JWT);
    });
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Login Page"), "Username:", " ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "",
    id: "tf-username",
    value: username,
    onChange: e => setusername(e.target.value)
  }), /*#__PURE__*/React.createElement("br", null), "Password:", " ", /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "",
    id: "tf-password",
    value: password,
    onChange: e => setpassword(e.target.value)
  }), /*#__PURE__*/React.createElement("span", null, " hint: xyz123"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: () => login()
  }, "Login"), /*#__PURE__*/React.createElement("hr", null));
}