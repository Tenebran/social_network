import React, { useState, ChangeEvent } from 'react';
import './Myposts.scss';
import Posts from './Post/Posts';
import { PostDataType, ActionTypes, addPostAC } from '../../../../store/store';

type PropsType = {
  postData: Array<PostDataType>;
  dispatch: (action: ActionTypes) => void;
};

export default function Myposts(props: PropsType) {
  const [blur, setBlur] = useState(false);
  let [title, setTitle] = useState('');
  let [error, setError] = useState<null | string>(null);

  let addPost = () => {
    if (title.trim() !== '') {
      props.dispatch(addPostAC(title));
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
            src="https://sun9-8.userapi.com/impf/c841537/v841537085/99b1/4grSL5x_cg8.jpg?size=2560x1440&quality=96&sign=c984b423f823ed80c9ad893c6e36c00c&type=album"
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
            <button className="profile__person__button" onClick={() => setBlur(false)}>
              Close
            </button>
          ) : (
            ''
          )}

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
