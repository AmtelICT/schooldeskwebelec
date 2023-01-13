import Sidebar from '../components/Sidebar'
import Topbar from "../components/Topbar";
import "./Afterlogin.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import User from "./User";
import NewUser from "./NewUser";
import ProductList from "./ProductList";
import Product from "./Product";
import NewProduct from "./NewProduct";
function Afterlogin() {
  return (
   <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
        <UserList/>
        <User/>
        <NewUser/>
        <ProductList/>
        <Product/>
        <NewProduct/>
      </div>
      </div>
      
  );
}

export default Afterlogin;