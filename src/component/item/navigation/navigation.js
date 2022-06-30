import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { AiOutlineMore as MenuIcon } from "react-icons/ai";

const Menu = () => {
  return (
    <ul className="link-list">
      <li>
        <Link to="/service">Nos service</Link>
      </li>
      <li>
        <a href="#info">Centre de formation</a>
      </li>
      <li>
        <a href="#info">Nos projets réussis</a>
      </li>
      <li>
        <a href="#info">Notre réseau international</a>
      </li>
      <li>
        <a href="#info">A propos de nous</a>
      </li>
    </ul>
  );
};

const Navigation = () => {
  const [menuState, setMenuState] = useState(false);
  const [overMenu, setOverMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="container navigation">
      <div className="logo-container">
        <Link className="logo" to="/">
          JEIPraktikum
        </Link>
      </div>
      <div className="nav_link">
        <div className="nav_list">
          <ul>
            <li>
              <Link to="/service">Nos service</Link>
            </li>
            <li>
              <Link to="/centre_de_formation">talent&emploi</Link>
            </li>
            <li
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
            >
              <button onClick={() => setShowAbout(!showAbout)}>A propos</button>
              <div className={showAbout ? "about block" : "about none"}>
                <div>
                  <a href="#info">Nos projets réussis</a>
                </div>
                <div>
                  <a href="#info">Notre réseau international</a>
                </div>
                <div>
                  <a href="#info">JEIPraktikum</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="button">
          <Link to="/signup">s'inscrire</Link>
          <Link to="/signin" className="connexion">
            connexion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
