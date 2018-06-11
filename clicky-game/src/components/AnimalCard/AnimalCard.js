import React from "react";
import "./AnimalCard.css";

const AnimalCard = props => (
    <div className="card">
        <div className="img-container">
            <img onClick={() => props.shuffleAnimals(props.id)} alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <strong>Name: </strong> {props.name}
        </div>
    </div>
)