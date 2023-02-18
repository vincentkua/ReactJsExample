export default function UseReducer(props) {
  const records = props.records; 
  const dispatch = props.dispatch;

  const maparraylist = records.map((eachitem) => <li>{eachitem}</li>);
  return (
    <div>
      <p style={{ backgroundColor: "lightgray" }}>Use Reducer</p>
      <ul>{maparraylist}</ul>
      <button onClick={()=>dispatch("add")}>Add something</button>
      <button onClick={()=>dispatch("delete")}>Delete Last</button>
    </div>
  );
}
