import React from "react";
import api from "../../api.js";
// import SearchBar from "./SearchBar.js";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsArray: []
    };
  }

  componentDidMount() {
    api
      .get("/search-result")
      .then(response => {
        console.log("List of products!!!!!", response.data);
        this.setState({ productsArray: response.data });
      })
      .catch(err => {
        console.log("------------------", err);
        alert("Oups, something went wrong");
      });
  }

  render() {
    const { productsArray } = this.state;
    console.log("coucou", this.props);
    return (
      <div>
        <section className="elements">
          <h1>Your result for {this.props.inputValue} </h1>
          <ul>
            {productsArray.map((oneProduct, index) => {
              return (
                (oneProduct.fields.produits
                  .toLowerCase()
                  .includes(this.props.inputValue.toLowerCase()) ||
                  oneProduct.fields.typologie_des_dechets
                    .toLowerCase()
                    .includes(this.props.inputValue.toLowerCase())) && (
                  <section className="SearchResult-container">
                    <li key={index} className="product-container">
                      <img
                        src={oneProduct.fields.images}
                        className="product-image"
                        alt=""
                      />
                      <div className="product-info">
                        <h3 className="product-title">
                          {oneProduct.fields.produits}
                        </h3>
                        <p>
                          <b>Type:</b> {oneProduct.fields.typologie_des_dechets}
                        </p>
                        <p>
                          <b>Qu'est-ce que j'en fais ? :</b>{" "}
                          {oneProduct.fields.qu_est_ce_que_j_en_fais}
                        </p>
                        <p>
                          <b>Que va-t-il devenir ? :</b>{" "}
                          {oneProduct.fields.que_va_t_il_devenir}
                        </p>
                        {oneProduct.fields.comment_eviter_de_le_produire && (
                          <p>
                            <b>Comment éviter ce type de déchet:</b>{" "}
                            {oneProduct.fields.comment_eviter_de_le_produire}
                          </p>
                        )}
                      </div>
                    </li>
                  </section>
                )
              );
            })}
          </ul>
        </section>
        );
      </div>
    );
  }
}

export default SearchResult;
