import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadProducts } from "../actions/productsAction";
import Product from "./Product";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  // load products from firestore
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  return (
    <div className="w-4/12 bg-slate-200 divide-y divide-slate-400 h-min rounded">
      <h2 className="text-3xl p-3">Products</h2>
      <div className="p-3 divide-y divide-slate-300 divide-solid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
