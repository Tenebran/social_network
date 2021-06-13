import React from 'react';
import './Myposts.scss';
import Posts from './Post/Posts';
import { ProfileType } from '../../../../testState/state';

export default function Myposts(props: ProfileType) {
  return (
    <div className="profile__person">
      <textarea></textarea>
      <button>Add post</button>
      {props.postData.map(post => (
        <Posts key={post.id} messages={post.messages} image={post.image} like={post.like} />
      ))}
    </div>
  );
}
