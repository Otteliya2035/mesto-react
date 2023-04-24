import "../index.css";
import api from "../utils/api";
import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleClose() {
    setSelectedCard(null);
  }

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className="main">
        <section className="profile">
          <button className="profile__avatar-btn" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
            <span className="profile__avatar-btn-icon"></span>
          </button>
          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__btn"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            className="profile__btn-add"
            type="button"
            onClick={onAddPlace}
          ></button>
        </section>
        <section className="elements">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
