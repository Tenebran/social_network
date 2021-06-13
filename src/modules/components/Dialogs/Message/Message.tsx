import React from 'react';
import './Message.scss';

type PropsType = {
  userIcon: string;
  userName: string;
  message: string;
};

export default function Message(props: PropsType) {
  return (
    <div className="dialogs__messages__item">
      <div className="dialogs__messages__wrapper">
        <img className="dialogs__messages__avatar" alt="avatar" src={props.userIcon}></img>
        <div>
          <span className="dialogs__messages_user">{props.userName}</span>
          <div className="dialogs__messages__messag">{props.message}</div>
        </div>
      </div>
    </div>
  );
}
