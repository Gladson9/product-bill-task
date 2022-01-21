import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToBasket } from "./../actions/basketActions";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const [inBasket, setInBasket] = useState(false);
  const { basket } = useSelector((state) => state);
  const handleAddToBasket = () => {
    dispatch(addToBasket(product));
    setInBasket(true);
  };

  useEffect(() => {
    function checkInBasket() {
      setInBasket(basket.some((item) => item.name === product.name));
    }
    checkInBasket();
  }, [basket.length]);
  return (
    <div className="flex justify-between items-center py-3">
      <div className="flex-auto">
        <h2 className="font-semibold px-2">{product.name}</h2>
      </div>
      <span className="px-4">£ {product.price.toFixed(2)}</span>
      <button
        disabled={inBasket}
        onClick={handleAddToBasket}
        className="bg-sky-400 text-white px-3 py-1 rounded transition hover:bg-sky-500 disabled:bg-gray-500"
      >
        Add
      </button>
    </div>
  );
};

export default Product;
