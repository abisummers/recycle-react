import React from "react";
import api from "../../api.js";

class CategoryResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      fields: {
        typologie_des_dechets: ""
      }
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    api
      .get(`/results/${params.productId}`)
      .then(response => {
        console.log("Product details", response.data);
        this.setState(response.data);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong");
      });
  }


  render() {
    const { createdAt } = this.state;
    const {
      qu_est_ce_que_j_en_fais,
      comment_eviter_de_le_produire,
      produits,
      que_va_t_il_devenir,
      images,
      typologie_des_dechets
    } = this.state.fields;
  
    return (
      <section>
        <img src={images} alt="" />
        <h2>How to recycle {produits}? </h2>
        <h3>Where to throw it?</h3>
        <p>{qu_est_ce_que_j_en_fais}</p>
        <h3>What will it become?</h3>
        <p>{que_va_t_il_devenir}</p>
        <h3>How to avoid using it?</h3>
        <p>{comment_eviter_de_le_produire}</p>
        <p>Category:   Popup.plugins().popover({typologie_des_dechets})</p>
        <p>Added on {createdAt}</p>
      </section>
    );
  }
}

export default CategoryResult;
