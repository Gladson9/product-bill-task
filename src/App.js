import ProductsContainer from "./components/ProductsContainer";
import BasketContainer from "./components/BasketContainer";

function App() {
  return (
    <div className="container flex justify-evenly mx-auto p-16">
      <ProductsContainer />
      <BasketContainer />
    </div>
  );
}

export default App;
