import React, { useState, ChangeEvent } from 'react';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.scss';
import Message from './Message/Message';
import DialogsTextArea from './DialogsTextArea/DialogsTextArea';
import { DialogsType } from '../../../redux/dialogs-reducer';

type PropsType = {
  dialogs: DialogsType;
  addMessage: (text: string) => void;
  isAuth: boolean;
};

export default function Dialogs(props: PropsType) {
  let [message, setMessage] = useState<string>('');
  let [error, setError] = useState<null | string>(null);

  let addMessage = () => {
    if (message.trim() !== '') {
      props.addMessage(message);
      setMessage('');
    } else {
      setError('Please write a message!!!!!');
    }
  };

  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.currentTarget.value);
    setError(null);
  };

  return (
    <div className="dialogs">
      <div className="dialogs__contacts">
        {props.dialogs.dialogsData.map(user => (
          <DialogItem name={user.name} key={user.id} id={user.id} image={user.image} />
        ))}
      </div>

      <div className="dialogs__messages">
        <div className="dialogs__messages__header">
          <div className="dialogs__messages__user_name">Sergiy Garkusha</div>
        </div>
        <div className="dialogs__messages-box">
          {props.dialogs.messagesData.map(mess => (
            <Message
              key={mess.id}
              message={mess.messages}
              userIcon={mess.image}
              userName={mess.userName}
            />
          ))}
        </div>
        <DialogsTextArea
          newMessages={props.dialogs.messagesData}
          addMessage={addMessage}
          onChangeTextArea={onChangeTextArea}
          message={message}
          error={error}
        />
      </div>
    </div>
  );
}
