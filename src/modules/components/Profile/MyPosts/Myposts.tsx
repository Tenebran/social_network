import React, { useState } from 'react';
import './Myposts.scss';
import Posts from './Post/Posts';
import { ProfileType } from '../../../../testState/state';

export default function Myposts(props: ProfileType) {
  const [blur, setBlur] = useState(false);

  const onFocusHandler = () => {
    setBlur(true);
  };

  const blurHandler = () => {
    console.log('textarea');
    setBlur(false);
  };

  console.log(props.postData);

  return (
    <>
      <div className="profile__person_area">
        <div className={blur ? 'profile__person_area-on' : ''}>
          <img
            className="profile__person__avatar"
            src="https://sun9-72.userapi.com/impf/c840431/v840431829/430f3/3aV51o5M5ng.jpg?size=640x428&quality=96&sign=7811429587d08016511bee6a72bb1f1b&type=album"
          ></img>
          <textarea
            placeholder="What´s new?"
            className={blur ? 'profile__person_areaOn' : 'profile__person_areaOff'}
            onBlur={blurHandler}
            onFocus={onFocusHandler}
          ></textarea>
        </div>
        <div className="profile__person__button-wrapper">
          {blur ? <button className="profile__person__button">Post</button> : ''}
        </div>
      </div>
      <div className="profile__person">
        {props.postData.map(post => (
          <Posts key={post.id} messages={post.messages} image={post.image} like={post.like} />
        ))}
      </div>
    </>
  );
}
