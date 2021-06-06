import React from 'react';
import './Posts.scss';

export default function Posts({ image, post, like }) {
  return (
    <div className="profile__person_posts">
      <img className="profile__person_avatar" alt="avatar" src={image}></img>
      {post}, Like: {like}
    </div>
  );
}
