import React from "react";
import "./home.css";
import Header from "../../item/header/header";
import Footer from "../../item/footer/footer";
import Acceuil from "./acceuil";
import Intro_service from "./intro_service";
import Intro_carriere from "./intro_carriere";
import Cards from "./cards";
import Nous_soutenir from "./nous_soutenir";
import JuniorEntreprise from "./junior-entreprise/junior";
import NosProjet from "./nos-projet/nos-projet";
import Block from "./components/block/block";


const Home = () => {
  return (
    <section>
      <Header animated={true} />
      <div className="home-container">
        <div className="acceuil_bg">
          <Acceuil />
        </div>
        <Block
          title="découvrer les monde des"
          titleColor="Junior entreprises"
        >
          <JuniorEntreprise/>
        </Block>
        <Block title="nos succes stories">
          <NosProjet/>
        </Block>
        <div className="info_bg">
          <Intro_service />
        </div>
        <div className="carriere_bg">
          <Intro_carriere />
        </div>
        <div className="nous_soutenir_bg">
          <Nous_soutenir />
        </div>
        <Block title ="nos partenaires">
          <h1>partenaires</h1>
          <div>
            tous les partenaire
          </div>
        </Block>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
