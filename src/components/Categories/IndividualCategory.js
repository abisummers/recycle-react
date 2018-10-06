import React, { Component } from "react";
// import NotFound from "../NotFound";
import api from "../../api.js";
import CategoryList from "./CategoryList.js";
import CategoryPopup from "./CategoryPopup.js";
import { Link } from "react-router-dom";

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
      productCategory: [],
      showPopup: false,
      selectedCat: {}
    };
  }

  handleClick(index) {
    console.log("coucou handleClick");
    this.setState({
      selectedCat: this.state.productCategory[index]
    });
  }

  // togglePopup(index) {
  //   const { productCategory } = this.state;
  //   let productCategoryCopy = [...productCategory];
  //   productCategoryCopy[index].showPopup = !productCategoryCopy[index]
  //     .showPopup;
  //   this.setState({
  //     productCategory: productCategoryCopy
  //   });
  // }

  componentDidMount() {
    const { id } = this.props.match.params;

    api
      .get(`/material/${id}`)
      .then(response => {
        response.data.sort((a, b) => {
          const aLower = a.fields.produits.toLowerCase();
          const bLower = b.fields.produits.toLowerCase();

          if (aLower > bLower) {
            return 1;
          } else {
            return -1;
          }
        });
        this.setState({ productCategory: response.data });
      })
      .catch(err => {
        console.log(err);
        alert("something went wrong");
      });
  }

  render() {
    const { productCategory } = this.state;
    console.log("selectedCat", this.state.selectedCat);
    const category = categories.find(
      ({ id }) => id === this.props.match.params.id
    );
    return (
      <section>
        <h2 className="oneCategory-name">{category.label}</h2>

        <div className="addproduct">
          <Link to="/add">Ajouter un produit</Link>
        </div>

        <div className="indiv-container">
          <CategoryList
            productCategory={productCategory}
            onClick={index => {
              this.handleClick(index);
            }}
          />
          <CategoryPopup
            catToShow={this.state.selectedCat}
            className="cat-popup"
          />
        </div>
      </section>
    );
  }
}

export default IndividualCategory;
