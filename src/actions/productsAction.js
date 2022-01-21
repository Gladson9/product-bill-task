import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase";

export const loadProducts = () => async (dispatch) => {
  const productsColl = collection(db, "products");
  const productsSnapshot = await getDocs(productsColl);
  const products = productsSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  dispatch({
    type: "LOAD_PRODUCTS",
    payload: products,
  });
};
