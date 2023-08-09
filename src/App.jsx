
import './App.css';
import AddProduct from './components/ShoppingCart/AddProduct';
import { useState } from "react";
import ProductList from './components/ShoppingCart/ProductList';
function App() {
  const [productList, setProductList] = useState([]);
  console.log(productList)
  const onSaveProduct = (newProduct) => {
    setProductList((prevState) => [newProduct, ...prevState]);
  };
  return (
    <div>
      <AddProduct productList={productList} setProductList={setProductList} onSaveProduct = {onSaveProduct}/>
      <ProductList productList={productList} setProductList={setProductList} />
    </div>
  );
}

export default App;
