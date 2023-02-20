import Sidebar from './components/Sidebar'
import Topbar from "./components/Topbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
//import NewStudent from './pages/NewStudent';
//import StudentList from './pages/StudentList';
import AddStudent from  './components/createstudent';
import StudentsList from  './components/studentlist';
import Studentdetail from  './components/studentdetail';
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/newstudent" element={<AddStudent />} />
          <Route path="/studentlist" element={<StudentsList />} />
          <Route path="/edit-student/:id" element={<Studentdetail/>} />
          <Route path="/studentdetails" element={<StudentsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;