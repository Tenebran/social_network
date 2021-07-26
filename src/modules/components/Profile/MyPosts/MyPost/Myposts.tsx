import React, { useState, ChangeEvent, KeyboardEvent, useRef } from 'react';
import './Myposts.scss';
import Posts from '../Post/Posts';
import { ProfileType } from '../../../../../redux/profile-reducer';

type PropsType = {
  profile: ProfileType;
  addPost: (title: string) => void;
  noAvatar: string;
};

export default function Myposts(props: PropsType) {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [blur, setBlur] = useState(false);
  let [title, setTitle] = useState('');
  let [error, setError] = useState<null | string>(null);

  let addPost = () => {
    if (title.trim() !== '') {
      props.addPost(title);
    } else {
      setError('Please Give Text!!!!');
    }

    setBlur(false);
    setTitle('');
  };

  const onFocusHandler = () => {
    setBlur(true);
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

  return (
    <>
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
            className={blur ? 'profile__person_areaOn' : 'profile__person_areaOff '}
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
      <div className="profile__person">
        {props.profile.postData.map(post => (
          <Posts
            key={post.id}
            messages={post.messages}
            image={props.profile.profileInfo.photos.large}
            like={post.like}
            noAvatar={props.noAvatar}
          />
        ))}
      </div>
    </>
  );
}
