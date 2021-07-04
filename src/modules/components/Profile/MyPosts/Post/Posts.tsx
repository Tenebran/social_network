import React from 'react';
import './Posts.scss';
import { PostDataType } from '../../../../../store/store';

export default function Posts(props: PostDataType) {
  return (
    <div className="profile__person_posts">
      <img className="profile__person_avatar" alt="avatar" src={props.image}></img>
      {props.messages}, Like: {props.like}
    </div>
  );
}
