<<<<<<< HEAD
import React from "react";
// import { Link } from "react-router-dom";
import api from "../api.js";

class CategoryResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resultsArray: [],
            // _id: "",
            // fields: {
            //     qu_est_ce_que_j_en_fais: "",
            //     comment_eviter_de_le_produire: "",
            //     produits: "",
            //     que_va_t_il_devenir: "",
            //     images: "",
            //     typologie_des_dechets: "",
            // },
            // createdAt: "",
            // updatedAt: ""
        };
    }

    componentDidMount() {
        const { params } = this.props.match;
        api
            .get(`/results/${params.productId}`)
            .then(response => {
                console.log("List of products", response.data);
                this.setState(response.data);
            })
            .catch(err => {
                console.log(err);
                alert("Sorry! Something went wrong");
            });
    }

    render() {
        const { _id, createdAt } = this.state;
        const { qu_est_ce_que_j_en_fais, comment_eviter_de_le_produire, produits, que_va_t_il_devenir, images, typologie_des_dechets } = this.state.fields
        return (
            <section>
                <img src={images}/>
                <h2>How to recycle {produits}? </h2>
                <h3>Where to throw it?</h3>
                <p>{qu_est_ce_que_j_en_fais}</p>
                <h3>What will it become?</h3>
                <p>{que_va_t_il_devenir}</p>
                <h3>How to avoid using it?</h3>
                <p>{comment_eviter_de_le_produire}</p>
                <p>Category: {typologie_des_dechets}</p>
                <p>Added on {createdAt}</p>
            </section>
        );
    }
}

export default CategoryResult;
=======
import React from "react"
import api from "../../api.js";



class SearchResult extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            productsArray:[{

                
                _id:"",
                recordid:"",
                fields:{
                    images:"",
                    typologie_des_dechets:"",
                    qu_est_ce_que_j_en_fais:"",
                    que_va_t_il_devenir:"",
                    produits:"",
                },
                record_timestamp:""
            }],
            };
    }

    componentDidMount(){
        api.get("/search-result")
            .then(response=>{
                console.log("List of products!!!!!", response.data);
                this.setState({productsArray:response.data})
            })
            .catch(err =>{
                console.log("------------------",err);
                
                alert("Oups, something went wrong")
            })
    }

    render(){
        const {productsArray} = this.state
        // const{_id, recordid, record_timestamp}= this.state
        // const {images, typologie_des_dechets, qu_est_ce_que_j_en_fais, que_va_t_il_devenir, produits} = this.state.fields
        return(
            <section className="SearchResult-container">
                <h1>Your result for *name*</h1>
                <ul>
                    {productsArray.map(oneProduct =>
                        // <li>{ this.state.fields[oneKey] }</li>
                        <li key={oneProduct._id}>
                            <h3>{oneProduct.fields.produits}</h3>
                            <p>Type:{oneProduct.fields.typologie_des_dechets}</p>
                            <p>Qu'est-ce que j'en fais:{oneProduct.qu_est_ce_que_j_en_fais}</p>
                            <p>Que va t'il devenir: {oneProduct.que_va_t_il_devenir}</p>
                            <p></p>
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}

export default SearchResult;
>>>>>>> b9234a684965bc4595fe4d42ccb0b5bb0a8d6c9d
