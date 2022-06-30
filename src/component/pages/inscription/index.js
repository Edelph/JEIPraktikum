import React from "react";
import { AiOutlineArrowLeft as Arrow } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <section className="content_center">
      <Link to="/service" className="arrow">
        <Arrow color="#FBFBFB" size={25} />
      </Link>
      <div className="container center">
        <div className="row center">
          <div className="col personnal_information_container">
            <form>
              <div class="form-group">
                <div className="row">
                  <div className="col">
                    <label for="exampleInputEmail1">Nom</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="textHelp"
                      placeholder="Entre votre nom"
                    />
                  </div>
                  <div className="col">
                    <label for="exampleInputEmail1">Prénom</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="textHelp"
                      placeholder="Entrer votre prénom"
                    />
                  </div>
                </div>
                <label for="exampleInputEmail1">Adresse émail</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Mots de passe</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">
                  Confirmer votre mots de passe
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>

          <Link to="/project_details">
            <button type="submit" class="btn submit-button w-100 my-2">
              Continuer
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
