import React from "react";
import "../index.css";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <figure className="element__container">
        <img
          src={props.card.link}
          alt={props.card.name}
          className="element__img"
          onClick={handleClick}
        />
        <figcaption className="element__info">
          <h2 className="element__title">{props.card.name}</h2>
          <div className="element__like-container">
            <button className="element__like-btn" type="button"></button>
            <span className="element__like-count">
              {props.card.likes.length}
            </span>
          </div>
          <button class="element__delete" type="button"></button>
        </figcaption>
      </figure>
    </li>
  );
}

export default Card;
