import React from "react";
import Product from "./Product";

const ProductsContainer = () => {
  const products = [
    {
      name: "Bread",
      price: 1.1,
    },
    {
      name: "Milk",
      price: 0.5,
    },
    {
      name: "Cheese",
      price: 0.9,
    },
    {
      name: "Soup",
      price: 0.6,
    },
    {
      name: "Butter",
      price: 1.2,
    },
  ];

  return (
    <div className="w-4/12 bg-slate-200 divide-y divide-slate-400  rounded">
      <h2 className="text-3xl p-3">Products</h2>
      <div className="p-3 divide-y divide-slate-300 divide-solid">
        {products.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
