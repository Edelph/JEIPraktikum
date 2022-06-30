import React, { useState } from "react";
import "./cards.css";
import { AiOutlineArrowRight as Arrow } from "react-icons/ai";
import {
  stage_image,
  work_image,
  entreprise_image,
} from "../../../assets/images";

const card_image_list = [
  { titre: "Stage en ligne", image: stage_image },
  { titre: "Stage de memoire", image: work_image },
  { titre: "Travail en ligne", image: entreprise_image },
];

const Card = ({ image, titre, text, alt }) => {
  const [isOver, setIsOver] = useState(false);
  return (
    <div className="card_intro">
      <img src={image} alt={alt} />
      <div className="card_content">
        <h5>{titre}</h5>
        <p>{text}</p>
        <button
          onMouseOut={() => setIsOver(false)}
          onMouseOver={() => setIsOver(true)}
          type="button"
          className="btn btn-outline-light"
        >
          <Arrow color={isOver ? "#0582f7" : "white"} size={15} />
        </button>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <section className="cards_container">
      {card_image_list.map((item, i) => (
        <Card
          key={"image_carriere " + i}
          image={item.image}
          titre={item.titre}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, iste?"
          alt={i}
        />
      ))}
    </section>
  );
};

export default Cards;
