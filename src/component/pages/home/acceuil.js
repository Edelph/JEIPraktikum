import React from "react";
import "./acceuil.css";

const Acceuil = () => {
  return (
    <>
      <section className="acceuil">
        <header>
          <div className="owl-carousel owl-theme">
            <div className="item">
              <div className="cover">
                <div className="container">
                  <div className="header-content">
                    <div className="line"></div>
                    <h2>Reinvent Business Experience with</h2>
                    <h1>Our Global and Integrated Solutions</h1>
                    <h4>
                      We help entrepreneurs, start-ups and enterprises shape
                      their ideas into business
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Acceuil;
