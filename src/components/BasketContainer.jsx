import React from "react";
import { useSelector } from "react-redux";
import ProductInBasket from "./ProductInBasket";

const BasketContainer = () => {
  const { basket } = useSelector((state) => state);

  const getSubTotal = () => {
    return basket.reduce((pre, curr) => pre + curr.totalCost, 0);
  };
  const getSavings = () => {
    return basket.reduce((pre, curr) => pre + curr.savings, 0);
  };

  return (
    <div className="w-7/12 bg-slate-200 rounded divide-y divide-slate-400 divide-solid h-min">
      <h2 className="text-3xl p-3 font-bold">Basket</h2>
      <div className="p-3 divide-y divide-slate-300 divide-solid">
        {basket.length === 0 && (
          <h2 className="text-lg font-semibold">Basket is Empty.</h2>
        )}

        {/* Products in Basket  */}
        {basket.map((product) => (
          <ProductInBasket key={product.id} product={product} />
        ))}
      </div>
      {/* Products total Cost  */}
      <div>
        <div className="flex justify-between px-3 py-2 font-semibold">
          <span className="">Sub Total:</span>{" "}
          <span>£{getSubTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between px-3 py-2 font-semibold">
          <span className="">Savings:</span>{" "}
          <span>£{getSavings().toFixed(2)}</span>
        </div>
        <div className="flex justify-between px-3 py-2 font-semibold">
          <span className="">Total Amount:</span>
          <span>£{(getSubTotal() - getSavings()).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default BasketContainer;
