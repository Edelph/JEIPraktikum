import React from "react";
import "./acceuil.css";
import chevron_down from "../../../assets/images/chevron_down_32.png"

const Acceuil = () => {
  return (
    <>
      <section className="acceuil">
        <header>
          <div className="header-content">
            <h2>Les talents de demain,</h2>
            <h2>aujourd'hui.</h2>
            <p>
              Soutenez les J.E en versant votre <span>taxe d'apprentissage</span>
            </p>
            <button className="demarer-projet">Démarrer un projet</button>
            <p>
              En savoir plus
              <img 
                src={chevron_down}
              />
            </p>
          </div>
        </header>
      </section>
    </>
  );
};

export default Acceuil;
