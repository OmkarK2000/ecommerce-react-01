import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <h4>Company</h4>
        <div className="line"></div>
        <p>About us</p>
        <p>Our Services</p>
        <p>Privacy Policy</p>
        <p>Affilate Program</p>
      </div>

      <div className="footerContainer">
        <h4>Get Help</h4>
        <div className="line"></div>
        <p>FAQ</p>
        <p>Returns</p>
        <p>Shopping</p>
        <p>Order Status</p>
        <p>Payment Options</p>
      </div>

      <div className="footerContainer">
        <h4>Online Shop</h4>
        <div className="line"></div>
        <p>Watch</p>
        <p>Blog</p>
        <p>Shoes</p>
        <p>Dress</p>
      </div>

      <div className="footerContainer">
        <h4>Follow Us</h4>
        <div className="line"></div>
        <p><FaFacebookF /></p>
        <p><FaTwitter /></p>
        <p><FaInstagram /></p>
        <p></p>
      </div>
    </div>
  )
}

export default Footer