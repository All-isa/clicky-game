import React from "react";
import "./AnimalCard.css";

const AnimalCard = props => (
    <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <strong>Name: </strong> {props.name}
        </div>
    </div>
)

export default AnimalCard;