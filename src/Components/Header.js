import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
<<<<<<< HEAD
=======
import "./Header.css";
>>>>>>> origin/master
import { useStateValue } from "../StateProvider";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export default function Header() {
  const [{ basket, userEmail }, dispatch] = useStateValue();
  var auth = getAuth();
  var user = auth.currentUser;

  function handleUser() {
    if (userEmail !== "Guest") {

      const db = getDatabase();
      set(ref(db, "users/" + user.uid), basket)
      signOut(auth);
    }
  }

  return (
<<<<<<< HEAD
    <div className="flex pr-7 pl-7 pt-4  pb-4 justify-between text-white items-center text-sm font-normal inter" style={{backgroundColor:"#131921"}}>
      <Link to="/">
        <div className="flex justify-center">
        <img src={logo} className=" h-12 object-contain"/>
        </div>
      </Link>

      <div className="flex flex-row items-center justify-center w-full ">
        <input type="text" className="w-4/5 h-6 border-none border-0 outline-none" />
        <SearchIcon className="flex-shrink-0 h-6  object-contain" style={{backgroundColor:"#febd69"}} />
      </div>

      <div className="flex items-center justify-between w-2/5">
        <Link to="/login">
          <div className="mr-3" onClick={handleUser}>
            <div className="text-white  inter ">
            <span className=" ">Hello {userEmail} </span>
            </div>
            <div>
            <h4 className="text-white text-base font-bold">{userEmail !== "Guest" ? "Sign Out" : "Sign In"}</h4>
            </div>
          </div>
        </Link>
        <div className="mr-3">
          <span>Returns</span>
          <h4 className="text-base font-bold">& Orders</h4>
        </div>
        <div className="mr-3">
          <span>Your</span>
          <h4 className="text-base font-bold">Prime</h4>
        </div>

        <Link to="/checkout">
          <div className="text-white flex">
            <ShoppingBasketIcon
             className="w-6 h-6 flex-shrink-0 mr-4 "
            />
            <h1 className=" font-normal text-sm ">{basket.length}</h1>
=======
    <div className="header">
      <Link to="/">
        <img src={logo} className="header-logo" />
      </Link>

      <div className="header-search">
        <input type="text" className="header-searchbar" />
        <SearchIcon className="search-icon" />
      </div>

      <div className="header-nav">
        <Link to="/login">
          <div className="header-subnav" onClick={handleUser}>
            <span>Hello {userEmail}</span>
            <h4>{userEmail !== "Guest" ? "Sign Out" : "Sign In"}</h4>
          </div>
        </Link>
        <div className="header-subnav">
          <span>Returns</span>
          <h4>& Orders</h4>
        </div>
        <div className="header-subnav">
          <span>Your</span>
          <h4>Prime</h4>
        </div>

        <Link to="/checkout">
          <div className="header-cart">
            <ShoppingBasketIcon
              fontSize="large"
              className="nav-shopping-basket"
            />
            <span className="nav-shopping-text">{basket.length}</span>
>>>>>>> origin/master
          </div>
        </Link>
      </div>
    </div>
  );
}
