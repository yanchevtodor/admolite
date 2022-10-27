import { Link } from "react-router-dom";
import logo from "../Assets/images/Logo.png";


const Footer = () => {
    return ( 
        <footer>
            <div className="wrapper">
                <div className="first-colum">
                    <img className="logo" src={logo} />

                </div>
                <div className="second-colum">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/some">Some</Link></li>
                    </ul>
                </div>
                <div className="third-colum">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/some">Some</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;