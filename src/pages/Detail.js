import Panier from "../components/Panier";

export default function Detail(props) {
  const { panier, handleAddPanier, handleRemovePanier } = props;

  return (
    <>
      <Panier
        panier={panier}
        handleAddPanier={handleAddPanier}
        handleRemovePanier={handleRemovePanier}
      />
    </>
  );
}
