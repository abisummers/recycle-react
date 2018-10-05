import React from "react"

const CategoryPopup = (props) => {
    console.log("props:",props)
    return (
        
        <div className="popup">
        {
           props.catToShow.fields ?
           <React.Fragment>
            <p>{props.catToShow.fields.produits}</p>
            <p>{props.catToShow.fields.produits}</p>
            <p>{props.catToShow.fields.produits}</p>
            <p>{props.catToShow.fields.produits}</p>
            <p>{props.catToShow.fields.produits}</p>
           </React.Fragment>
           :
           <p>No product selected</p>
        }
        </div>
    );

}

export default CategoryPopup;