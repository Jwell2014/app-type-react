export default function Plantes(props) {
  const { plants } = props;
  return (
    <ul>
      <h1>Mes plantes</h1>
      {plants.map((plant, index) => (
        <li key={`${plant}-${index}`}>{plant}</li>
      ))}
    </ul>
  );
}
