import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Menu from "./components/Menu";
import "./styles/App.css";
import Detail from "./pages/Detail";

export default function App() {
  const plants = [
    "plantes d'ombre",
    "cactus",
    "plantes d'extérieur",
    "plantes pour débutants",
    "plantes fleuries",
  ];
  const [panier, updatePanier] = useState(0);

  function handleAddPanier() {
    console.log("+");
    updatePanier(panier + 1);
  }
  function handleRemovePanier(Panier) {
    console.log("-");
    updatePanier(panier - 1);
  }

  const name = "bob";

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home name={name} />}></Route>
        <Route path="/List" element={<List plants={plants} />}></Route>
        <Route
          path="/Detail"
          element={
            <Detail
              panier={panier}
              handleAddPanier={handleAddPanier}
              handleRemovePanier={handleRemovePanier}
            />
          }
        ></Route>
      </Routes>

      {/* envoie de props a un composant enfant */}
    </>
  );
}
