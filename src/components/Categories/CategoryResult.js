// import React from "react";

// // import { Link } from "react-router-dom";
// // import api from "../api.js";

// class CategoryResult extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       _id: "",
//       fields: {
//       qu_est_ce_que_j_en_fais: "",
//       comment_eviter_de_le_produire: "",
//       produits: "",
//       que_va_t_il_devenir: "",
//       images: "",
//       typologie_des_dechets:"",
//       },
//       createdAt: "",
//       updatedAt: ""
//     };
//   }

//   componentDidMount() {
//     const { params } = this.props.match;
//     api
//       .get(`/Results/${params.productId}`)
//       .then(response => {
//         console.log("Product details", response.data);
//         this.setState(response.data);
//       })
//       .catch(err => {
//         console.log(err);
//         alert("Sorry! Something went wrong");
//       });
//   }

//   render() {
//     const { _id, fields.qu_est_ce_que_j_en_fais, createdAt } = this.state;
//     return (
//       <section>
//         <h2> Your results</h2>
//         <p>Product #{_id}</p>
//         <p>Added on {createdAt}</p>
//       </section>
//     );
//   }
// }

// export default CategoryResult;
