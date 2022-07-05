import React from "react";
import "./nos-projet.css";

import project_img from "../../../../assets/images/stage_image.jpg"

const NosProjectItem = (props)=>{


    return(
        <div className="nos-project-item">
            <img
            src={project_img}
            alt="ima projet"
            />
            <div>
                <h1>titre projet</h1>
                <p> 
                     similique facilis, illo animi placeat
                      saepe quo dolorum unde? Obcaecati 
                      nobis corrupti fugit consectetur, 
                      quisquam, aliquam minima, esse ipsum
                       sunt doloribus quidem modi consequa
                       tur tempora nihil incidunt similique asperiores! Temporibus corporis assumenda doloremque dicta. Dolorum minus ipsum
                </p>

                <a className="voir-project" href="#" > voir</a>
            </div>

        </div>
    )
}



const NosProjet = ()=>{
    
    return (
        <div className="nos-projects">
            <NosProjectItem/>
            <NosProjectItem/>
        </div>
    )
}

export default NosProjet;