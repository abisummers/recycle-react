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
