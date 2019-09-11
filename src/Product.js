import React from 'react';


function Product(props) {
  return (
    <div className="w-full lg:w-1/4 px-2 mb-2">
      <div className="bg-gray-200 text-gray-800 p-5 rounded-lg">
        <h3 className="text-3xl">{props.product.name}</h3>
        <p className="text-xl">
        {props.product.price.toLocaleString("en-AUD", { style: "currency", currency: "AUD" })}
        </p>
        <p>{props.product.info}</p>
      </div>
    </div>
  );
}

export default Product;
