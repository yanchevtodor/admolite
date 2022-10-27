import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [visible, setVisible] = useState(false)
    return ( 
        <div className={ visible ? "menu active" : "menu"}> 
            <span className="mobile-menu" onClick={() => setVisible( visible => !visible)} ></span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/some">Some</Link></li>
            </ul>
        </div>
     );
}
 
export default Menu;