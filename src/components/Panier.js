export default function Panier(props) {
  const { panier, handleAddPanier, handleRemovePanier } = props;

  return (
    <div>
      <h2>Mon panier</h2>
      {panier}
      <br />

      <button onClick={() => handleRemovePanier(panier)}>-</button>
      <button onClick={() => handleAddPanier(panier)}>+</button>
    </div>
  );
}
