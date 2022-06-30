import React from "react";
import "./intro_service.css";
import { bg_intro_service } from "../../../assets/images";

const Intro_service = () => {
  return (
    <section className="intro_container">
      <div className="left_content_service">
        <div className="contenu_intro_service">
          <h2>Text into for services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            assumenda repellendus! Ducimus nisi eum, neque possimus praesentium
            numquam vero, tenetur quia dicta in, voluptas laudantium officia
            quasi natus ratione? Culpa sunt, atque iste similique facilis, illo
            animi placeat saepe quo dolorum unde? Obcaecati nobis corrupti fugit
            consectetur, quisquam, aliquam minima, esse ipsum sunt doloribus
            quidem modi consequatur tempora nihil incidunt similique asperiores!
            Temporibus corporis assumenda doloremque dicta. Dolorum minus ipsum
          </p>
          <div className="container-bouton">
            <button type="button" className="btn btn-outline-light">
              voir plus
            </button>
          </div>
        </div>
      </div>
      <div className="right_content_service">
        <img
          className="image_service"
          src={bg_intro_service}
          alt="image representatif du service"
        />
      </div>
    </section>
  );
};

export default Intro_service;
