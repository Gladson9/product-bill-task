import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  checkSpecialOffers,
  decreaseProductCount,
  increaseProductCount,
} from "../actions/basketActions";

const ProductInBasket = ({ product }) => {
  const dispatch = useDispatch();

  const handleCountIncrease = () => {
    dispatch(increaseProductCount(product));
  };
  const handleCountDecrease = () => {
    dispatch(decreaseProductCount(product));
  };

  useEffect(() => {
    dispatch(checkSpecialOffers());
    return () => dispatch(checkSpecialOffers());
  }, [product.count, dispatch]);

  return (
    <div>
      <div className="py-3 flex justify-between text-lg">
        <h2 className="basis-1/2">{product.name}</h2>
        <span className="basis-1/4">£{product.price.toFixed(2)}</span>
        <div>
          <button
            onClick={handleCountIncrease}
            className="px-2 py-1 text-white bg-sky-500 rounded hover:bg-sky-600"
          >
            +
          </button>
          <span className="px-3">{product.count}</span>
          <button
            onClick={handleCountDecrease}
            className="px-2 py-1 text-white bg-sky-500 rounded hover:bg-sky-600"
          >
            -
          </button>
        </div>
      </div>
      {/* item price */}
      <div className="flex justify-end border-b- border-slate-400">
        <span className="text-gray-500 ">
          Item price £{product.price.toFixed(2)} * {product.count} = £
          {product.totalCost.toFixed(2)}
        </span>
      </div>
      {product.savings !== 0 && (
        <div className="flex justify-end text-red-500 py-2">
          <span>Savings £{product.savings.toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-end font-semibold">
        <span>
          Item cost £{(product.totalCost - product.savings).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductInBasket;
