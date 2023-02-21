import Welcome from "../components/Welcome";
import Panier from "../components/Panier";

export default function Home(props) {
  const { name, panier, handleAddPanier, handleRemovePanier } = props;
  return (
    <>
      <Welcome name={name} />
      <Panier
        panier={panier}
        handleAddPanier={handleAddPanier}
        handleRemovePanier={handleRemovePanier}
      />
    </>
  );
}
