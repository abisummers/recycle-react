import React, { Component } from "react";

const categories = [
  { label: "Bois", id: "bois" },
  { label: "Déchets du Bâtiment", id: "dechets-du-batiment" },
  { label: "Déchets de cuisine", id: "dechets-de-cuisine" },
  { label: "Déchets Dangereux", id: "dechets-dangereux" },
  {
    label: "Déchets Electriques et électroniques",
    id: "dechets-electriques-et-electroniques"
  },
  { label: "Divers", id: "divers" },
  { label: "Métaux", id: "metaux" },
  { label: "Mobilier", id: "mobilier" },
  { label: "Papiers-Cartons", id: "papiers-cartons" },
  { label: "Plastiques", id: "plastiques" },
  { label: "Textiles et cuir", id: "textiles-et-cuir" },
  { label: "Verre", id: "verre" }
];
class AllCategories extends Component {
  state = {};
  render() {
    return (
      <section>
        <h2>All Categories </h2>

        <ul>
          {categories.map(({ label, id }) => (
            <li key={id}>{label}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default AllCategories;
