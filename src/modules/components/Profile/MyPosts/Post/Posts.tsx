import React from 'react';
import './Posts.scss';

type PropsType = {
  id?: string;
  image: string | null;
  like: number;
  messages: string;
  noAvatar: string;
};

export default function Posts(props: PropsType) {
  return (
    <div className="profile__person_posts">
      <img
        className="profile__person_avatar"
        alt="avatar"
        src={props.image ? props.image : props.noAvatar}
      ></img>
      {props.messages}, Like: {props.like}
    </div>
  );
}
