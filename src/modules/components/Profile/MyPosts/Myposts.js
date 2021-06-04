import React from 'react';
import './Myposts.scss';
import Posts from './Post/Posts';

export default function Myposts() {
  return (
    <div className="profile__person">
      <textarea></textarea>
      <button>Add post</button>
      <Posts />
    </div>
  );
}
