import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.scss';
import Message from './Message/Message';
import { DialogsType } from '../../../testState/state';

type PropsType = {
  dialogs: DialogsType;
};

export default function Dialogs(props: PropsType) {
  return (
    <div className="dialogs">
      <div className="dialogs__contacts">
        {props.dialogs.dialogsData.map(user => (
          <DialogItem name={user.name} key={user.id} id={user.id} image={user.image} />
        ))}
      </div>

      <div className="dialogs__messages">
        <div className="dialogs__messages__header">
          <div className="dialogs__messages__user_name">Sofia Zaulychnova</div>
        </div>

        {props.dialogs.messagesData.map(mess => (
          <Message
            key={mess.id}
            message={mess.messages}
            userIcon={mess.image}
            userName={mess.userName}
          />
        ))}
      </div>
    </div>
  );
}
