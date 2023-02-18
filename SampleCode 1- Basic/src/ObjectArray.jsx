export default function ObjectArray() {
  const ObjectArray = [
    {
      id: 1,
      name: "Movie1",
      description: "Description1",
    },
    {
      id: 2,
      name: "Movie2",
      description: "Description2",
    },
  ];

  const renderedarray = ObjectArray.map((eachitem) => (
    <div>
      <li id={eachitem.id}>
        {eachitem.id}-- {eachitem.name}
      </li>
      <li>{eachitem.description}</li>
      <br />
    </div>
  ));

  return (
    <div>
      <p style={{ backgroundColor: "lightgray" }}>Object Array Sample</p>
      <div>{renderedarray}</div>
    </div>
  );
}
