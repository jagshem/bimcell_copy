import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleDegis() {
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a onClick={handleDegis}>
          <img
            src="https://cagrimerkezinumarasi.com/wp-content/uploads/2017/11/bim2-300x300.png"
            alt="Bimcell Logo"
          />
        </a>
      </div>
      <div className="navbar-customer-service">
        <span>Müşteri Hizmetleri</span>
        <span className="navbar-phone">444 55 756</span>
      </div>
      <hr className="navbar-divider" />
    </nav>
  );
}

export default Navbar;
