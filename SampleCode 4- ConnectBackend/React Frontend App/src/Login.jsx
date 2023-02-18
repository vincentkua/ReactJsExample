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
        password: document.getElementById("tf-password").value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body.JWT);
        setJWTtoken(body.JWT);
      });
  }

  return (
    <div>
      <h3>Login Page</h3>
      Username:{" "}
      <input
        type="text"
        name=""
        id="tf-username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <br />
      Password:{" "}
      <input
        type="password"
        name=""
        id="tf-password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <span> hint: xyz123</span>

      <br />
      <button onClick={() => login()}>Login</button>
      <hr />
    </div>
  );
}
