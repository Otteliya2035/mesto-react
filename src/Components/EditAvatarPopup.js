import React, { useRef, useState } from "react";
import PopupWithForm from "../Components/PopupWidthForm";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInputRef = useRef(null);
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      btnText="Сохранить"
      onSubmit={handleSubmit}
    >
      <form className="popup__form popup__form-avatar" name="form" novalidate>
        <input
          className="popup__field popup__field_input_avatar"
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          required
          id="avatar-input"
          ref={avatarInputRef}
        />
        <span className="popup__input-error avatar-input-error"></span>
      </form>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
