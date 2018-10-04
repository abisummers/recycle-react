import React, { Component } from "react";
// import NotFound from "../NotFound";
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

class Popup extends React.Component {
  render() {

    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup} className="close-popup">
            Fermer
          </button>
        </div>
      </div>
    );
  }
}

class IndividualCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productCategory: [],
      showPopup: false
    };
  }
  togglePopup(index) {
    const {productCategory} = this.state;
    let productCategoryCopy = [...productCategory];
    productCategoryCopy[index].showPopup= !productCategoryCopy[index].showPopup
    this.setState({
      productCategory: productCategoryCopy 
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    api
      .get(`/material/${id}`)
      .then(response => {
        // console.log("all items", response.data);
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
    // console.log(productCategory);

    const category = categories.find(
      ({ id }) => id === this.props.match.params.id
    );
    // console.log(category);

    return (
      <section>
        <h2 className="oneCategory-name">{category.label}</h2>

        <ul>
          {productCategory.map((oneCategory, index) => (
            
            <button
              onClick={()=>this.togglePopup(index)}
              className="popup-button"
            >
              <li key={oneCategory._id} className="product-list">
                {oneCategory.fields.produits}
              </li>
              {oneCategory.showPopup && (
                <Popup
                  text={oneCategory.fields.produits}
                  closePopup={()=>this.togglePopup}
                />
              ) }
            </button>
          ))}
        </ul>
      </section>
    );
  }
}

export default IndividualCategory;
