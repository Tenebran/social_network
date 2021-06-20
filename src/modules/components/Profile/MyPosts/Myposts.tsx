import React, { useState, ChangeEvent } from 'react';
import './Myposts.scss';
import Posts from './Post/Posts';
import { PostDataType } from '../../../../testState/state';

type PropsType = {
  postData: Array<PostDataType>;
  addPost: (value: string) => void;
};

export default function Myposts(props: PropsType) {
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

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.currentTarget.value);
    setError(null);
  };

  return (
    <>
      <div className="profile__person_area">
        <div className={blur ? 'profile__person_area-on' : ''}>
          <img
            alt="avatar"
            className="profile__person__avatar"
            src="https://sun9-72.userapi.com/impf/c840431/v840431829/430f3/3aV51o5M5ng.jpg?size=640x428&quality=96&sign=7811429587d08016511bee6a72bb1f1b&type=album"
          ></img>
          <textarea
            value={title}
            placeholder={error === null ? 'What´s new?' : error}
            className={blur ? 'profile__person_areaOn' : 'profile__person_areaOff '}
            onFocus={onFocusHandler}
            onChange={onChangeHandler}
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
        {props.postData.map(post => (
          <Posts key={post.id} messages={post.messages} image={post.image} like={post.like} />
        ))}
      </div>
    </>
  );
}
