import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { AiOutlineMore as MenuIcon } from "react-icons/ai";
import NavItem from "./nav-item/nav-item";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <Link className="logo" to="/">
          JEIPraktikum
        </Link>
      </div>
      <div className="nav_link">
        <div className="nav_list">
            <NavItem to="/service" value = "Nos service"/>
            <NavItem value ="A propos">
              <Link to="#info">Nos projets réussis</Link>
              <Link to="#info">Notre réseau international</Link>
              <Link to="#info">JEIPraktikum</Link>
            </NavItem>
            <NavItem to="/centre_de_formation" value="talent&emploi"/>
        </div>
        <div className="connection">
          <NavItem to="/signup" value = "s'inscrire"/>
          <NavItem to="/signin" value = "connexion"/>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
