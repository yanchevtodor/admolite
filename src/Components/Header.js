import Menu from "./Menu";
import logo from "../Assets/images/Logo.png";

const Header = () => {
    return ( 
        <div className="header">
            <div className="wrapper" >
                <div className="logo">
                    <img  src={logo} />
                    <h1>space</h1>
                </div>
                
                <Menu />                
            </div>          
            
        </div>
     );
}
 
export default Header;