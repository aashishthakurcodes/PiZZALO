import React from "react";
import "./Header.css";
import img from "./download.png";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Haeder = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 500) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const items = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const location = useLocation();
  const handleCartClick = () => {
    // If you are on the cart page, show an alert message
    if (location.pathname === "/cart") {
      alert("You are already on the Cart page!");
    } else {
      navigate("/cart");
    }
  };

  const handleHome = () => {
    if (location.pathname === "/cart") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
  };
  const handleProducts = () => {
    if (location.pathname === "/cart") {
      navigate("/");
    } else {
      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleService = () => {
    if (location.pathname === "/cart") {
      navigate("/");
    } else {
      document
        .getElementById("services")
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContact = () => {
    if (location.pathname === "/cart") {
      navigate("/");
    } else {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleAbout = () => {
    if (location.pathname === "/cart") {
      navigate("/");
    } else {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div  className={`header ${scroll ? "sticky-header" : " "}`}>
        <header>
          <div className="nav-wrapper">
            <div className="logo-container">
              <img className="logo" src={img} alt="Logo" />
            </div>
            <nav>
              <input className="hidden" type="checkbox" id="menuToggle" />
              <label className="menu-btn" htmlFor="menuToggle">
                <div className="menu" />
                <div className="menu" />
                <div className="menu" />
              </label>
              <div className="nav-container">
                <ul className="nav-tabs">
                  <li className="nav-tab" onClick={handleHome}>
                    Home
                  </li>
                  <li
                    className="nav-tab"
                    onClick={handleProducts}
                    onError={(e) => handleHome}
                  >
                    Menu
                  </li>
                  <li className="nav-tab" onClick={handleService}>
                    Services
                  </li>

                  <li className="nav-tab" onClick={handleCartClick}>
                    Cart({items.length})
                  </li>
                  <li className="nav-tab" onClick={handleAbout}>
                    About
                  </li>
                  <li className="nav-tab" onClick={handleContact}>
                    Contact
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Haeder;
