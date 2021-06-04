import React from 'react';
import './Message.scss';

export default function Message({ message, userName, userIcon }) {
  return (
    <div className="dialogs__messages__item">
      <div className="dialogs__messages__wrapper">
        <img className="dialogs__messages__avatar" alt="avatar" src={userIcon}></img>
        <div>
          <span className="dialogs__messages_user">{userName}</span>
          <div className="dialogs__messages__messag">{message}</div>
        </div>
      </div>
    </div>
  );
}
