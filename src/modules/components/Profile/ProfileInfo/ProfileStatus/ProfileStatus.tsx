import React, { ChangeEvent, useState } from 'react';
import './ProfileStatus.scss';

type PropsType = {
  aboutMe?: string | null;
};

const ProfileStatus = (props: PropsType) => {
  let [status, setStatus] = useState<boolean>(false);
  let [title, setTitle] = useState<string>(props.aboutMe ? props.aboutMe : 'Set status');

  const onEditMode = () => {
    if (title === 'Set status') {
      setTitle('');
    }
    setStatus(true);
  };
  const offEditMode = () => {
    if (title === '') {
      setTitle('Set status');
    }
    setStatus(false);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <div className="profile__label-status">
      {status ? (
        <div className="profile__label-wrapper" onBlur={() => setTimeout(offEditMode, 200)}>
          <input
            value={title}
            autoFocus
            onChange={onChangeHandler}
            className="profile__label-textfield"
          ></input>
          <button className="profile__label__button" onClick={offEditMode}>
            Save
          </button>
        </div>
      ) : (
        <span
          onClick={onEditMode}
          className={title !== 'Set status' ? 'profile__label-status' : 'profile__label-nostatus'}
        >
          {title}
        </span>
      )}
    </div>
  );
};

export default ProfileStatus;
