import Getmovie from "./Getmovie";
import Login from "./Login";
import Addmovie from "./Addmovie";

function App(props) {
  const [JWTtoken, setJWTtoken] = React.useState("");
  return (
    <div>
      <Login setJWTtoken={setJWTtoken} />
      <Addmovie JWTtoken={JWTtoken} />
      <Getmovie JWTtoken={JWTtoken}/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
