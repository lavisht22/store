import React from "react";

import "./style.scss";

function Product({ productName, brand, price, imageUrl }) {
  return (
    <div className="product">
      <img src={imageUrl} alt={productName} width={100} height={150} />
      <div>
        <span>{productName}</span>
        <span>₹{price}</span>
      </div>
    </div>
  );
}

export default Product;
