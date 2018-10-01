import React, { Component } from "react";
import NotFound from "../NotFound";

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

class IndividualCategory extends Component {
  state = {};
  render() {
    const category = categories.find(
      ({ id }) => id === this.props.match.params.id
    );
    if (category) {
      return (
        <section>
          <h2>Categories</h2>
          <p>{this.props.match.params.id}</p>
        </section>
      );
    } else {
      return <NotFound what="category" />;
    }
  }
}

export default IndividualCategory;
