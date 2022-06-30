import React from "react";
import "./projet_page.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const list_of_services = [
  {
    icon: <AiOutlineClose color="#FBFBFB" />,
    name: "Ingénierie",
  },
  {
    icon: <AiOutlineClose color="#FBFBFB" />,
    name: "Informatique&web",
  },
  {
    icon: <AiOutlineClose color="#FBFBFB" />,
    name: "Finance",
  },
  {
    icon: <AiOutlineClose color="#FBFBFB" />,
    name: "Marketing",
  },
  {
    icon: <AiOutlineClose color="#FBFBFB" />,
    name: "Communication",
  },
  {
    icon: <AiOutlineClose color="#FBFBFB" />,
    name: "Stratégie",
  },
  {
    icon: <AiOutlineClose color="#FBFBFB" />,
    name: "Architecture",
  },
  {
    icon: <AiOutlineClose color="#FBFBFB" />,
    name: "Droit",
  },
  {
    icon: <AiOutlineClose color="#FBFBFB" />,
    name: "Agronomie",
  },
  {
    icon: <AiOutlineClose color="#FBFBFB" />,
    name: "Traduction",
  },
];

const Projet_page = () => {
  const puce = ">";
  return (
    <section>
      <div className="project_container">
        <div className="left_project_container">
          <div className="left_project_content">
            <div className="head">
              <div className="logo_in_project_page">
                <div className="jei">JEI</div>
                <div className="praktikum">Praktikum</div>
              </div>
              <div className="head_text">
                <h4 className="depot">Déposer un projet</h4>
                <div className="step">Etape à suivre</div>
              </div>
            </div>
            <div className="list_step">
              <ul>
                <li>
                  <div>{puce}</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt nostrum architecto ab? Quam, deleniti vitae.
                  </p>
                </li>
                <li>
                  <div>{puce}</div>
                  <p>
                    Eveniet earum explicabo expedita voluptatum doloribus aut at
                    a saepe incidunt repellat possimus, facilis suscipit.
                  </p>
                </li>
                <li>
                  <div>{puce}</div>
                  <p>
                    Deserunt animi veniam voluptatum corporis, molestias a,
                    deleniti dolorem alias cumque eaque ex error reprehenderit.
                  </p>
                </li>
                <li>
                  <div>{puce}</div>
                  <p>
                    Repudiandae, nihil molestiae voluptatem aliquid soluta magni
                    numquam vitae mollitia quas itaque laudantium ducimus modi.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right_project_container">
          <h4>De quoi avez vous besoin?</h4>
          <div className="list_service">
            {list_of_services.map((item, i) => (
              <Link
                key={"service" + i}
                className="service"
                to="/project_submission"
              >
                <div className="icon_service">{item.icon}</div>
                <p> {item.name} </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projet_page;
