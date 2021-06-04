import React from 'react';
import { Link } from 'react-router-dom';
import './DialogItem.scss';

export default function DialogItem({ name, id, image }) {
  let myPath = '/dialogs/' + id;

  return (
    <Link to={myPath} className="dialogs__contacts_item">
      <img alt="ava" className="dialogs__avatar" src={image}></img>
      <span className="dialogs__contacts__name">{name}</span>
    </Link>
  );
}
