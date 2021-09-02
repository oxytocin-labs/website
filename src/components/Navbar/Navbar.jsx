import "./Navbar.css"
import logo from "../../logo.svg"


const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar-logo">
                
                <img src={logo} alt="--logo--" className="navbar-logo-image"/>
            </div>
            <div className="navbar-content">
                Content
            </div>
        </div>
     );
}
 
export default Navbar;