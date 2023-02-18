import { Provider } from "react-redux";
import store from "./reduxstorage";
import ReduxExample from "./ReduxExample";
import Sample from "./Sample";

export default function Count(props) {
  return (
      <div>
        <p style={{ backgroundColor: "lightgray" }}>Redux Example</p>
        <ReduxExample />
        <Sample />
      </div>
  );
}
