import React from "react"
import api from "../../api.js";



class SearchResult extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            productsArray:[
                //{
                // _id:"",
                // recordid:"",
                // fields:{
                //     images:"",
                //     typologie_des_dechets:"",
                //     qu_est_ce_que_j_en_fais:"",
                //     que_va_t_il_devenir:"",
                //     produits:"",
                // },
                // record_timestamp:""}
            ]
            };
    }

    componentDidMount(){
        api.get("/search-result")
            .then(response=>{
                console.log("List of products!!!!!", response.data);
                this.setState({productsArray: response.data})
            })
            .catch(err =>{
                console.log("------------------",err);
                
                alert("Oups, something went wrong")
            })
    }

    render(){
        const {productsArray} = this.state
        // const{_id, recordid, record_timestamp}= this.state
        //const {images, typologie_des_dechets, qu_est_ce_que_j_en_fais, que_va_t_il_devenir, produits} = this.state.fields
        return(
            <section className="SearchResult-container">
                <h1>Your result for *name*</h1>
                <ul>
                    {productsArray.map((oneProduct, index) =>
                        // <li>{ this.state.fields[oneKey] }</li>
                        <li key={index} className="product-container">
                            <img src={oneProduct.fields.images} className="product-image"/>
                            <div className="product-info">
                            <h3 className="product-title">{oneProduct.fields.produits}</h3>
                            <p><b>Type:</b> {oneProduct.fields.typologie_des_dechets}</p>
                            <p><b>Qu'est-ce que j'en fais:</b> {oneProduct.fields.qu_est_ce_que_j_en_fais}</p>
                            <p><b>Que va t'il devenir:</b> {oneProduct.fields.que_va_t_il_devenir}</p>
                            {oneProduct.fields.comment_eviter_de_le_produire  &&
                            <p><b>Comment éviter ce type de dêchet:</b> {oneProduct.fields.comment_eviter_de_le_produire}</p>
                            }
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}

export default SearchResult;
