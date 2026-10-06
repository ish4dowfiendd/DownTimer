import logo from "../../assets/power-256.png";
import "./Header.css";

function Header () {
    return (
        <div id="headerContainer">
            <img src={logo} className="logo" alt="Power Icon Logo" />
            <p>Set an action for your PC to complete automatically.</p>
        </div>
    );
};

export default Header;