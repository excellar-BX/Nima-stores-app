import React, { useState } from "react";
import { BiMenuAltLeft, BiSolidHome, BiX } from "react-icons/bi";
import { NavLink, Routes, Route } from "react-router-dom";
import Overview from "./Overview";
import Categories from "./Categories";
import Orders from "./Orders";
import Products from "./Products";
import Users from "./Users";
import AddProduct from "./AddProduct";

const Nav = [
  { name: "Overview", icon: <BiSolidHome />, route: "" },
  { name: "Users", icon: <BiSolidHome />, route: "users" },
  { name: "Add Product", icon: <BiSolidHome />, route: "addproduct" },
  { name: "Products", icon: <BiSolidHome />, route: "products" },
  { name: "Orders", icon: <BiSolidHome />, route: "orders" },
  { name: "Categories", icon: <BiSolidHome />, route: "categories" },
];
const AdminHome = () => {
 const [hidden, setHidden] = useState(true);
  return (
    <div className="w-[30%]">



      {/* SIDENAV */}
      <div className={`sidenav bg-primary ${hidden ? " w-[5%] " : 'lg:w-[20%] w-[30%]' } h-[100%] min-[400px]:absolute block py-10  `}>
        <div className=" absolute left-2 top-4 ">
          {!hidden ? (
            <BiX onClick={() => setHidden(!hidden)} className=" w-6 h-6 " />
          ) : (
            <BiMenuAltLeft
              onClick={() => setHidden(!hidden)}
              className=" w-6 h-6 "
            />
          )}
        </div>
        {Nav.map((link) => (
          <div className=" my-10 mx-auto w-[90%] ">
            <NavLink to={link.route}>
              <div className=" flex w-[100%] ">
                <span className={` w-[20px] h-[20px] mt-1 ${hidden ? 'mx-auto':"" }  `}>{link.icon}</span>
                {hidden ? "" : <span className=" ml-4 ">{link.name}</span>}
              </div>
            </NavLink>
          </div>
        ))}
      </div>


<Routes>
  <Route path='' element={<Overview/>}/>
  <Route path='products' element={<Products/>}/>
  <Route path='addproduct' element={<AddProduct/>}/>
  <Route path='categories' element={<Categories/>}/>
  <Route path='users' element={<Users/>}/>
  <Route path='orders' element={<Orders/>}/>
  
</Routes>
    </div>
  );
};



export default AdminHome;
