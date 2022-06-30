import React from "react";
import "./index.css";
import Header from "../../item/header/header";
import Footer from "../../item/footer/footer";
import Acceuil from "./acceuil";
import Projet_page from "./projet_page";

const ServicePage = () => {
  return (
    <div>
      <Header animated={false} />
      <div className="acceuil_service_container">
        <Acceuil />
      </div>
      <div className="project_service_container">
        <Projet_page />
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
