import React, { Component } from "react";

const categories = [
  "Bois",
  "Déchets du Bâtiment",
  "Déchets de cuisine",
  "Déchets Dangereux",
  "Déchets Electriques et électroniques",
  "Divers",
  "Métaux",
  "Mobilier",
  "Papiers-Cartons",
  "Plastiques",
  "Textiles et cuir",
  "Verre"
];
class AllCategories extends Component {
  state = {};
  render() {
    return (
      <section>
        <h2>All Categories </h2>

        <ul>
          {categories.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default AllCategories;
