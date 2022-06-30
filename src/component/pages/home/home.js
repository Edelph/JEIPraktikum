import React from "react";
import "./home.css";
import Header from "../../item/header/header";
import Footer from "../../item/footer/footer";
import Acceuil from "./acceuil";
import Intro_service from "./intro_service";
import Intro_carriere from "./intro_carriere";
import Cards from "./cards";
import Nous_soutenir from "./nous_soutenir";

const Home = () => {
  return (
    <div>
      <Header animated={true} />
      <div className="home-container">
        <div className="acceuil_bg">
          <Acceuil />
        </div>
        <div className="info_bg">
          <Intro_service />
        </div>
        <div className="carriere_bg">
          <Intro_carriere />
        </div>
        <div className="nous_soutenir_bg">
          <Nous_soutenir />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
