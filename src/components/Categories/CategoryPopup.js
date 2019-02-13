import React from "react";

const CategoryPopup = props => {
  return (
    <div className="popup">
      {props.catToShow.fields ? (
        <React.Fragment>
          <h3>{props.catToShow.fields.produits}</h3>
          <p>
            <b>Type:</b> {props.catToShow.fields.typologie_des_dechets}
          </p>
          <p className="cadre-vert">
            <b>Qu'est-ce que j'en fais ? :</b>{" "}
            {props.catToShow.fields.qu_est_ce_que_j_en_fais}
          </p>
          <p>
            <b>Que va-t-il devenir ? :</b>{" "}
            {props.catToShow.fields.que_va_t_il_devenir}
          </p>
        </React.Fragment>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
};

export default CategoryPopup;
