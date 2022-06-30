import React from "react";
import "./nous_soutenir.css";
import Carousel from "../../item/carousel/carousel";

const Nous_soutenir = () => {
  return (
    <section className="nous_soutenir_container">
      <div className="container nous_soutenir_content">
        <h2>Nous soutenir</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui
          quo facere! Quos nam ratione aspernatur totam illum! Modi molestias
          quaerat minus reiciendis esse cum rem velit ex expedita tenetur, quia
          illo dolores quas porro, earum corporis cupiditate itaque iusto
          voluptates exercitationem! Cumque reprehenderit quibusdam iste, quo
          voluptatibus laboriosam exercitationem quas necessitatibus quasi neque
          autem accusamus eligendi fuga quisquam? Labore illo eum tempora
          dolorum libero! Asperiores numquam dicta vel, provident, quaerat odio
          aut ab cum perspiciatis laborum mollitia? Distinctio consequuntur amet
          quasi esse ea nihil quo magnam doloremque, inventore tempora autem a
          nam, dignissimos explicabo fugit aut quas. Corporis, consequuntur?
        </p>
        <button type="button" className="btn btn-outline-light">
          soutenir
        </button>
        <Carousel />
      </div>
    </section>
  );
};

export default Nous_soutenir;
