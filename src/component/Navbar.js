import { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => setMenu(!menu);
  return (
    <div className="header">
      <div className="container">
        <h1>
          De<span className="primary">Fi</span>
        </h1>
        {/* Below condition show if we click on icone they will show menu otherwise none */}
        <ul className={menu ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home </a>
          </li>
          <li>
            <a href="/">Featured </a>
          </li>
          <li>
            <a href="/">Earn </a>
          </li>
          <li>
            <a href="/">Contact </a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburger" onClick={handleMenu}>
          {/* if Menu true display cross othewise display icone of Menu */}
          {menu ? "❌" : <FaBars size={20} style={{ color: "#333" }} />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
