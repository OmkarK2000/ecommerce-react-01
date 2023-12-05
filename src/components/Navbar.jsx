import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import "./Navbar.css"
import { useState } from "react";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className="nav">
      <h1><Link to="/">Logo</Link></h1>
      <span>
        <ul className="nav-items">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link> </li>
          <li><Link to="/contact">Contact</Link> </li>
          <li><Link to="/login">Login</Link> </li>
          <li><Link to="/cart"><FaCartShopping className="cart" /></Link></li>
        </ul>
        <ul className="responsive-nav-items">
          <li><Link to="/login">Login</Link> </li>
          <li><Link to="/cart"><FaCartShopping className="cart" /></Link></li>
          <button className="toggleBtn" onClick={()=> setToggle(!toggle)}><FaBars /></button>
        </ul>
        
      </span>
      {toggle ? <ul className="toggle-items">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link> </li>
          <li><Link to="/contact">Contact</Link> </li>
        </ul> : null}
    </div>
  )
}

export default Navbar;