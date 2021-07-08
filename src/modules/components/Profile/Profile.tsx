import React from 'react';
import './Profile.scss';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './MyPosts/MypostsContainer';
import { StoreType } from '../../../redux/store/store';

type PropsType = {
  store: StoreType;
};

export default function Profile(props: PropsType) {
  return (
    <div className="profile">
      <div className="profile__left">
        <ProfileAvatar />
      </div>

      <div className="profile__right">
        <ProfileInfo />
        <MypostsContainer store={props.store} />
      </div>
    </div>
  );
}
