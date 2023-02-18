export default function ArrayAddSplice() {
  const arr = ["one", "two", "three"];
  const arr2 = [...arr, "four", "five"];
   arr2.splice(0, 2);
  const rendered = arr2.map((x) => <li>{x}</li>);
  return (
    <div>
      <p style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>
        Array Add & Splice
      </p>
      {rendered}
    </div>
  );
}
