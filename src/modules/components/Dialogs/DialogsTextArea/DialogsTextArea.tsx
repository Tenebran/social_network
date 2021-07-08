import React, { ChangeEvent, KeyboardEvent, useRef } from 'react';
import './DialogsTextArea.scss';
import { messagesData } from '../../../../store/store';

type PropsType = {
  newMessages: Array<messagesData>;
  addMessage: () => void;
  onChangeTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  message: string;
  error: string | null;
};

export default function DialogsTextArea(props: PropsType) {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  type NewType = KeyboardEvent<HTMLTextAreaElement>;

  const onKeyPressHandler = (e: NewType) => {
    if (e.key === 'Enter') {
      props.addMessage();
      inputRef.current?.blur();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  };

  return (
    <div className="dialogs-area">
      <textarea
        placeholder={props.error ? props.error : 'Write a message ...'}
        className={props.error ? 'dialogs-area_text area-error' : 'dialogs-area_text'}
        onChange={props.onChangeTextArea}
        value={props.message}
        onKeyPress={onKeyPressHandler}
        ref={inputRef}
      ></textarea>
      <button className="dialogs-area__button" onClick={props.addMessage}>
        Send
      </button>
    </div>
  );
}
