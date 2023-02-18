export default function Mapindex() {
  const myarray = ["apple1", "apple2", "orange"];
  
  const renderedarray = myarray
    .filter((x) => x.includes("apple"))
    .map((x, index) => (
      <div>
        <p>
          {index}.{x}
        </p>
      </div>
    ));
  return (
    <div>
      <div style={{ backgroundColor: "lightgray" }}>Mapindex</div>
      {renderedarray}
    </div>
  );
}
