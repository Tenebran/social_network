import React, { ChangeEvent, useRef, useState, KeyboardEvent } from 'react';
import { ProfileType } from '../../../../../redux/profile-reducer';
import './MyPostTextArea.scss';

type PropsType = {
  profile: ProfileType;
  addPost: (title: string) => void;
  noAvatar: string;
};

const MyPostTextArea = React.memo((props: PropsType) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [blur, setBlur] = useState(false);
  let [title, setTitle] = useState('');
  let [error, setError] = useState<null | string>(null);

  let addPost = () => {
    if (title.trim() !== '') {
      props.addPost(title);
    } else {
      setError('Please Give Text!!!!');
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
    setBlur(false);
    setTitle('');
  };

  const onFocusHandler = () => {
    setBlur(true);
    setError(null);
  };

  const offFocusHandler = () => {
    setTimeout(() => setBlur(false), 120);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.currentTarget.value);
    setError(null);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      addPost();
      setBlur(true);
      inputRef.current?.blur();
    }
  };

  const onTextAreaClassName = () => {
    if (blur) {
      return 'profile__person_areaOn';
    } else if (error) {
      return 'profile__person_areaOff area-error';
    } else {
      return 'profile__person_areaOff';
    }
  };

  return (
    <div className="profile__person_area">
      <div className={blur ? 'profile__person_area-on' : ''}>
        <img
          alt="avatar"
          className="profile__person__avatar"
          src={
            props.profile.profileInfo.photos.large
              ? props.profile.profileInfo.photos.large
              : props.noAvatar
          }
        ></img>
        <textarea
          value={title}
          placeholder={error === null ? 'What´s new?' : error}
          className={onTextAreaClassName()}
          onFocus={onFocusHandler}
          onChange={onChangeHandler}
          onBlur={offFocusHandler}
          onKeyPress={onKeyPressHandler}
          ref={inputRef}
        ></textarea>
      </div>
      <div className="profile__person__button-wrapper">
        {blur ? (
          <button className="profile__person__button" onClick={addPost}>
            Post
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
});

export default MyPostTextArea;
