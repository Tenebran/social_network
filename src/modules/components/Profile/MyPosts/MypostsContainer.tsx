import React from 'react';
import { addPostAC } from '../../../../store/store';
import Myposts from './MyPost/Myposts';
import store from '../../../../redux/store/store';
import { StoreType } from '../../../../redux/store/store';

type PropsType = {
  store: StoreType;
};

export default function MypostsContainer(props: PropsType) {
  let addPost = (title: string) => {
    store.dispatch(addPostAC(title));
  };

  return <Myposts postData={props.store.getState().profileReducer.postData} addPost={addPost} />;
}
