import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import { Route, Routes, Link } from "react-router-dom";
// Link needs to be imported from react-router-dom to
//  render the client side without reloading the page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/productList" element={<ProductList />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
