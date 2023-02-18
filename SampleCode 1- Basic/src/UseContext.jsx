import { RecordContext } from "./RecordContext";

export default function UseContext() {
  const records = React.useContext(RecordContext);
  const maparraylist = records.map((eachitem) => <li>{eachitem}</li>);

  return (
    <div>
      <p style={{ backgroundColor: "lightgray" }}>Use Context</p>
      <ul>{maparraylist}</ul>
    </div>
  );
}
