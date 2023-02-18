export default function (props) {
  const showitem1 = props.showitem1;
  const showitem2 = props.showitem2;
  const showitem3 = props.showitem3;

  return (
    <div>
      <p style={{ backgroundColor: "lightgray" }}>Condition Rendering</p>
      {showitem1 == true ? "Item 1 is visible" : "Item 1 is hidden"}
      <br />
      {showitem2 == true ? "Item 2 is visible" : "Item 2 is hidden"}
      <br />
      {showitem3 == true && "OK Show Item 3"}
    </div>
  );
}
