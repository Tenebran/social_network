import React from 'react';
import { StoreType } from '../../../../redux/store/store';
import Dialogs from '../Dialogs';
import { addMessageAC } from '../../../../store/store';

type PropsType = {
  store: StoreType;
};

export default function DialogsContainer(props: PropsType) {
  let addMessage = (message: string) => {
    props.store.dispatch(addMessageAC(message));
  };

  return <Dialogs addMessage={addMessage} dialogs={props.store.getState().dialogsReducer} />;
}
