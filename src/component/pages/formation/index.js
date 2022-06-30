import React, { useState } from "react";
import Footer from "../../item/footer/footer";
import Header from "../../item/header/header";
import "./index.css";
import {
  stage_image,
  work_image,
  entreprise_image,
} from "../../../assets/images";

const card_image_offre = [
  { titre: "Stage en ligne", image: stage_image },
  { titre: "Stage de memoire", image: work_image },
  { titre: "Travail en ligne", image: entreprise_image },
];

const Card = ({ image, titre, text, alt }) => {
  const [isOver, setIsOver] = useState(false);
  return (
    <div className="card_offre_container">
      <img src={image} alt={alt} />
      <div className="card_offre_content">
        <h5>{titre}</h5>
        <p>{text}</p>
        <button type="button" className="btn btn-outline-light">
          voir
        </button>
      </div>
    </div>
  );
};

const Formation = () => {
  return (
    <div>
      <Header animated={false} />
      <section className="formation_header_background">
        <div className="container">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            voluptas harum maxime molestias. Cumque sapiente nihil consectetur
            aliquam nemo non magnam fugiat, ullam ad error quae laborum unde
            libero dolores odio nam quia tempore quod. Nostrum, iste. Ex, autem!
            Rem, cumque repellendus dolores eligendi neque porro commodi sit at
            consequatur?
          </p>
        </div>
      </section>
      <section className="emploi_section">
        <div className="cards_container_list">
          {card_image_offre.map((item, i) => (
            <Card
              key={"image_carriere " + i}
              image={item.image}
              titre={item.titre}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, iste?"
              alt={i}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Formation;
