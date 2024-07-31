import { Link, NavLink } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import {
  BiLogIn,
  BiSolidGroup,
  BiSolidShoppingBag,
  BiSolidUserPlus,
  BiMenuAltRight,
  BiX,
  BiSolidHeart,
} from "react-icons/bi";
import { useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const Links = [
    { name: "Login", icon: <BiLogIn />, route: "/login" },
    { name: "Signup", icon: <BiSolidUserPlus />, route: "/signup" },
    {
      name: "wishlist",
      icon: (
        <div className="flex">
          <BiSolidHeart />
          <span className="text-sm relative right-2 min-[529px]:bg-coral bg-[grey] rounded-full w-5 text-center h-5">
            3
          </span>
        </div>
      ),
      route: "/wishlist",
    },
    {
      name: "cart",
      icon: (
        <div className="flex">
          <BiSolidShoppingBag />
          <span className="text-sm relative right-2 min-[529px]:bg-coral bg-[grey] rounded-full w-5 text-center h-5">
            {cartItems.length}
          </span>
        </div>
      ),
      route: "/cart",
    },
    { name: "Admin", icon: <BiSolidGroup />, route: "/admin/login" },
  ];
  const [open, setOpen] = useState();
  return (
    <div
      className="w-full h-[60px] "
      style={{ background: "linear-gradient(270deg, #de8f19, #ffb23d)" }}
    >
      {/* Mobile Menu icons */}
      <div
        onClick={() => setOpen(!open)}
        className="w-7 h-7 right-8 top-6 cursor-pointer min-[529px]:hidden text-white absolute "
      >
        {open ? (
          <BiX className="text-[31px]" />
        ) : (
          <BiMenuAltRight className="text-[31px]" />
        )}
      </div>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div className="">
          <ul
            className={`flex flex-col opacity-100  right-4 absolute z-[100] max-[529px]:bg-coral  max-[529px]:mt-[9vh] transition-all duration-500 ease-in min-[529px]:flex-row  rounded-md px-2 py-3 ${
              open ? "top-0" : "max-[529px]:-top-[400px]"
            }`}
          >
            {/*nav pointer*/}
            <div className="bg-coral rounded-md w-7 h-7 rotate-45 absolute -top-2 right-4 min-[529px]:hidden"></div>
            {Links.map((link) => (
              <NavLink to={link.route}>
                <li className="flex flex-row  font-semibold  py-3  min-[529px]:hover:shadow-md max-[529px]:mx-6 max-[529px]:text-center ">
                  {" "}
                  <span className="text-2xl mx-1">{link.icon}</span> {link.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </OutsideClickHandler>
      <Link to="/">
        <img
          src="http://localhost:3000/logo.png"
          alt="logo"
          className="w-[70px] mx-4"
        />
      </Link>
    </div>
  );
};

export default Header;
