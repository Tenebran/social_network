import React from 'react';
import './Myposts.scss';
import Posts from './Post/Posts';

export default function Myposts({ postData }) {
  return (
    <div className="profile__person">
      <textarea></textarea>
      <button>Add post</button>
      {postData.map(post => (
        <Posts key={post.id} post={post.messages} image={post.image} like={post.like} />
      ))}
    </div>
  );
}
