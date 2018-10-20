import React from "react";

const CategoryList = props => {
  return (
    <ul className="catList">
      {props.productCategory.map((oneCategory, index) => (
        <button onClick={() => props.onClick(index)} className="popup-button">
          <li key={oneCategory._id} className="product-list">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Recycling_symbol2.svg/1200px-Recycling_symbol2.svg.png"
              alt=""
              className="image-product"
            />
            <p className="">{oneCategory.fields.produits}</p>
          </li>
        </button>
      ))}
    </ul>
  );
};

export default CategoryList;
