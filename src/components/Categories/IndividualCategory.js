import React, { Component } from "react";
import api from "../../api.js";

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
  constructor(props) {
    super(props);

    this.state = {
      productCategory: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    api
      .get(`/material/${id}`)
      .then(response => {
        this.setState({ productCategory: response.data });
      })
      .catch(err => {
        console.log(err);
        alert("something went wrong");
      });
  }

  render() {
    const { productCategory } = this.state;
    console.log(productCategory);

    const category = categories.find(
      ({ id }) => id === this.props.match.params.id
    );

    console.log(category);

    return (
      <section>
        <h2>{category.label}</h2>
        <ul>
          {productCategory.map(oneCategory => (
            <li key={oneCategory._id}>{oneCategory.fields.produits}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default IndividualCategory;