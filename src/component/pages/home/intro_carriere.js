import React from "react";
import { bg_intro_carriere } from "../../../assets/images";
import "./intro_carriere.css";
import Cards from "./cards";

const Intro_carriere = () => {
  return (
    <section>
      <div className="carriere_container">
        <div className="carriere_content">
          <div className="left_content_carriere">
            <Cards />
          </div>
          <div className="right_content_carriere">
            <h2>Centre de formation en ligne</h2>
            <div className="carriere_text_content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                consequuntur ratione ex inventore recusandae voluptatum
                assumenda ea voluptate, nemo similique? Fugiat quas accusantium
                magni provident placeat ullam recusandae mollitia saepe.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                veritatis adipisci unde voluptatum, modi voluptates quo neque
                soluta maxime fuga molestias voluptatem corrupti aspernatur
                inventore saepe in error consequuntur facere? Velit hic ipsa
                fuga! Inventore neque ullam iste minus dicta, nostrum voluptas
                voluptatem accusantium enim ab fugiat exercitationem doloremque
                quam!
              </p>
              <p>
                Numquam tempora quisquam, aliquid placeat possimus ut alias
                obcaecati ipsum voluptates repellat nulla cumque sint quod
                suscipit nemo dolores quasi optio fugit? Doloribus, esse!
                Tenetur expedita placeat soluta minima itaque fugiat impedit
                assumenda exercitationem voluptates ipsum unde odio officiis
                voluptatibus distinctio alias, iure nisi eius? Nesciunt iusto
                illum repellendus veritatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro_carriere;
