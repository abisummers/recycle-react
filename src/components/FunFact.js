import React from "react";
import api from "../api";

class FunFact extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.state = {
            facts: [],
            random: "",
        };
    }

    componentDidMount() {
        console.log("lll", this.props)
        api.get("/facts")
            .then(response => {
                this.setState({ facts: response.data })
            })
            .catch(err => {
                console.log("------------------", err);
                alert("Oups, something went wrong")
            });
    }

    buttonClicked(){
        this.forceUpdate();
    }

    render() {
        const { facts } = this.state;
        console.log("factssss :", facts);
        const randomNumber = Math.floor(Math.random() * facts.length);
        
        // handleClick(event) {
        //     event.preventDefault();
        //     this.setState({ facts: randomNumber })
        // }

        let myFact;
        if (facts.length > 0) {
            myFact = <li> {facts[randomNumber].description}</li>
        }

        return (
            <section className="funfact-box">
                <h1> Saviez-vous que :</h1>
                <ul>
                    {myFact}
                    <button onClick={this.buttonClicked.bind(this)}> Random Fact </button>
                </ul>
            </section>
        )
    }
}
export default FunFact;
