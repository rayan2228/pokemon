import React from "react";
const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="pokemonimg">
                    <img src={props.img} alt={props.img} />
                </div>
                <h2>{props.name}</h2>
                <p>height :<span className="ability"> {props.height}</span></p>
                <p>weight :<span className="ability"> {props.weight}</span></p>
                <p>You Have <span className="ability"> {props.moves}</span> moves</p>
                <p>Your move name <span className="ability"> {props.moveName}</span> </p>
            </div>
        </>
    )
}
export default Card