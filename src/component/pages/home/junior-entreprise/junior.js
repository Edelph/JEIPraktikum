
import React from "react";
import "./junior.css";
import imgJunior from "../../../../assets/images/large-group-standing-in-office.jpg"


const JuniorEntreprise = ()=>{

    return (
        <div className="junior-container">
            <div className="container">
                <p className="info-junior">
                        voluptas laudantium officia quasi natus ratione? 
                        Culpa sunt, atque iste similique facilis,
                        illo animi placeat saepe quo dolorum unde? 
                        Obcaecati nobis corrupti fugit consectetur,
                        quisquam, aliquam minima, esse ipsum sunt doloribus quidem modi consequatur tempora nihil incidunt similique asperiores! Temporibus corporis assumenda doloremque dicta. Dolorum minus ipsum
                </p>
                <img
                    src={imgJunior}
                    alt="img for junior"
                />
            </div>
        </div>
    )
}

export default JuniorEntreprise;

