import { Provider } from "react-redux";
import store from "./reduxstorage";
import ReduxExample from "./ReduxExample";

function App(props) {
  return (
    <Provider store={store}>
      <div>
        <p style={{ backgroundColor: "lightgray" }}>Redux Example</p>
        <ReduxExample />
      </div>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
