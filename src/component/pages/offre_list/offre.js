import React, { useState } from "react";
import "./offre.css";
import Header from "../../item/header/header";
import Footer from "../../item/footer/footer";

const PropositionOffre = ({ categorie }) => {
  var typeColor = "";
  switch (categorie) {
    case "stage":
      typeColor = "red";
      break;
    case "travaille":
      typeColor = "blue";
      break;
    default:
      break;
  }

  return (
    <div
      className="proposition"
      style={{
        borderLeft: `15px solid ${typeColor}`,
        borderRadius: "10px",
      }}
    >
      <div className="header_proposition">
        <h5 className="titre_proposition">Title project</h5>
        <p>emailadressduproposant@mail.com</p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut
          nulla voluptate consectetur, facilis dolore obcaecati. Labore adipisci
          molestias harum.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sequi aut nulla voluptate consectetur, facilis dolore obcaecati.
          Labore adipisci molestias harum.
        </p>
      </div>
      <div>
        <button className="more_details">Détails</button>
      </div>
    </div>
  );
};

const Filtre = (props) => {
  const { active, onClick, name } = props;

  const handleClick = () => {
    onClick(name);
  };

  return (
    <button onClick={() => handleClick()} className={"filtre " + props.active}>
      {props.children}
    </button>
  );
};

const Offre = () => {
  const [active, setActive] = useState({
    all: "active",
    filtre_1: "",
    filtre_2: "",
    filtre_3: "",
  });

  const clickEvent = (filtre) => {
    let selected = { ...active };
    for (const item in selected) {
      if (selected[item] === "active") {
        selected[item] = "";
      }
    }
    selected[filtre] = "active";
    setActive(selected);
  };

  return (
    <div className="offre">
      <Header />
      <div className="container">
        <div className="filtre-container">
          <h3>Offre</h3>
          <div class="selection-filtre">
            <Filtre active={active.all} onClick={clickEvent} name="all">
              Tout
            </Filtre>
            <Filtre
              active={active.filtre_1}
              onClick={clickEvent}
              name="filtre_1"
            >
              stage
            </Filtre>
            <Filtre
              active={active.filtre_2}
              onClick={clickEvent}
              name="filtre_2"
            >
              travaille de recherche
            </Filtre>
            <Filtre
              active={active.filtre_3}
              onClick={clickEvent}
              name="filtre_3"
            >
              travaille
            </Filtre>
          </div>
        </div>
        <div className="liste_offre">
          <PropositionOffre categorie={"stage"} />
          <PropositionOffre categorie={"stage"} />
          <PropositionOffre categorie={"travaille"} />
          <PropositionOffre categorie={"stage"} />
          <PropositionOffre categorie={"travaille"} />
          <PropositionOffre categorie={"travaille"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Offre;
