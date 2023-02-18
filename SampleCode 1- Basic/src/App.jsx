import Hello from "./Hello";
import Props from "./Props";
import UseState from "./UseState";
import MapFilter from "./MapFilter";
import Mapindex from "./Mapindex";
import ConditionRender from "./ConditionRender";
import UseReducer from "./UseReducer";
import RecordsReducer from "./RecordReducer";
import UseContext from "./UseContext";
import { RecordContext } from "./RecordContext";
import ObjectArray from "./ObjectArray";
import ArrayAddSplice from "./ArrayAddSplice";

function App(props) {
  const myArray = ["aaa", "bbb", "abcd"];
  const [mystring, setstring] = React.useState("Default State");
  const [records, dispatch] = React.useReducer(RecordsReducer, ["one", "two"]);

  return (
    <RecordContext.Provider value={records}>
      <div>
        <Hello />
        <Props value1="Props" value2="Sample" />
        <UseState mystring={mystring} setstring={setstring} />{" "}
        <MapFilter thearray={myArray} />
        <Mapindex />
        <ConditionRender showitem1={true} showitem2={false} showitem3={true} />
        <UseReducer records={records} dispatch={dispatch} />
        <UseContext />
        <ObjectArray />
        <ArrayAddSplice />
      </div>
    </RecordContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
