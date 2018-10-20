import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

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
  constructor(props) {
    super(props);

    this.state = {
      productCategory: []
    };
  }

  componentDidMount() {
    api
      .get("/material/:id")
      .then(response => {
        this.setState({ productCategory: response.data });
      })
      .catch(err => {
        console.log(err);
        alert("something went wrong");
      });
  }

  render() {
    // const { productCategory } = this.state;

    // const category = categories.find(
    //   ({ id }) => id === this.props.match.params.id
    // );

    return (
      <section>
        <h2>Toutes les Categories</h2>

        <ul className="allCategories clearfix">
          {categories.map(oneCategory => (
            <li key={oneCategory._id}>
              <Link
                to={`/material/${oneCategory.id}`}
                className={oneCategory.id}
              >
                {oneCategory.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default AllCategories;
