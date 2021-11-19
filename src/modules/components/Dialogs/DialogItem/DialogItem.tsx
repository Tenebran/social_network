import React from 'react';
import { Link } from 'react-router-dom';
import './DialogItem.scss';

type PropsType = {
  name: string;
  id: string;
  image: string;
};

const DialogItem = React.memo((props: PropsType) => {
  let myPath = '/dialogs/' + props.id;

  return (
    <Link to={myPath} className="dialogs__contacts_item">
      <img alt="ava" className="dialogs__avatar" src={props.image}></img>
      <span className="dialogs__contacts__name">{props.name}</span>
    </Link>
  );
});

export default DialogItem;
