import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWidthForm";
import ImagePopup from "../Components/ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        btnText="Сохранить"
       
      >
        <form
          className="popup__form popup__form-profile"
          name="form"
          noValidate
        >
          <input
            className="popup__field popup__field_input_username"
            name="name"
            type="text"
            minLength="2"
            maxLength="40"
            required
            placeholder="Имя"
            id="profile"
          />
          <span className="popup__input-error profile-error"></span>
          <input
            className="popup__field popup__field_input_userjob"
            name="about"
            type="text"
            minLength="2"
            maxLength="200"
            required
            placeholder="О себе"
            id="job"
          />
          <span className="popup__input-error job-error"></span>
        </form>
      </PopupWithForm>

      <PopupWithForm
        name="popup_new-place"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        btnText="Создать"
      >
        <form
          className="popup__form popup__form-place"
          id="form"
          name="form"
          noValidate
        >
          <input
            className="popup__field popup__field_input_new-place"
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            required
            placeholder="Название"
            id="name"
          />
          <span className="popup__input-error name-error"> </span>
          <input
            className="popup__field popup__field_input_link-pic"
            name="link"
            type="url"
            required
            placeholder="Ссылка на картинку"
            id="link"
          />
          <span className="popup__input-error link-error"> </span>
        </form>
      </PopupWithForm>

      <div className="popup popup_delete-card">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <form className="popup__form" name="form" novalidate>
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__button popup__yes-button" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>

      <PopupWithForm
        name="popup_edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        btnText="Сохранить"
      >
        <form className="popup__form popup__form-avatar" name="form" novalidate>
          <input
            className="popup__field popup__field_input_avatar"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required
            id="avatar-input"
          />
          <span className="popup__input-error avatar-input-error"></span>
        </form>
      </PopupWithForm>
    </div>
  );
}

export default App;
