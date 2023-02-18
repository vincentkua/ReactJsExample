export default function UseState(props) {

  // function changestate(x) {
  //   props.setstring(x);
  // }

  return (
    <div>
      <p style={{ backgroundColor: "lightgray" }}>React Usestate Method</p>
      {props.mystring} <button onClick={() => props.setstring("test123")}>Change State</button>
      {/* arrowfunction */}
      {/* <button onClick={function() {changestate()}}>Change State</button> */}
      {/* normalfunction */}
    </div>
  );
}
