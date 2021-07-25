import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileData } from '../../../../redux/profile-reducer';
import ProfileInfoContacts from './ProfileInfoContacts/ProfileInfoContacts';
import './ProfileInfo.scss';

type PropsType = {
  profile: ProfileData | undefined;
};

export default function ProfileInfo(props: PropsType) {
  return (
    <div className="profile__person">
      <div className="profile__person_wrapp">
        <span className="profile__person_name">Sergiy</span>
        <span className="profile__person_surname">Garkusha</span>

        <div className="profile__label-status">
          <div className="profile__label-name">Status:</div>
          <span className="profile__label-more">
            {props.profile?.aboutMe ? props.profile?.aboutMe : ''}
          </span>
        </div>
      </div>
      <div className="profile__label">
        <div className="profile__label-name">Contacts:</div>

        <ProfileInfoContacts contacts={props.profile?.contacts} />
      </div>
      <div className="profile__label">
        <span className="profile__label-name">Current city:</span>
        <span className="profile__label-more">Rostov</span>
      </div>
      <div className="profile__friends">
        <img
          alt="friends_photo"
          className="profile__friends_photo"
          src="https://sun9-20.userapi.com/impg/nQo9r7AS1nSeEhiaf3Nt7NrMCUI2rwON_WIE0Q/nq065pRrfmY.jpg?size=1344x2160&quality=95&sign=f8ddbf76f5d328636f0eab77cbcefc68&type=album"
        ></img>

        <img
          alt="friends_photo"
          className="profile__friends_photo"
          src="https://sun9-20.userapi.com/impg/nQo9r7AS1nSeEhiaf3Nt7NrMCUI2rwON_WIE0Q/nq065pRrfmY.jpg?size=1344x2160&quality=95&sign=f8ddbf76f5d328636f0eab77cbcefc68&type=album"
        ></img>
        <img
          alt="friends_photo"
          className="profile__friends_photo"
          src="https://sun9-20.userapi.com/impg/nQo9r7AS1nSeEhiaf3Nt7NrMCUI2rwON_WIE0Q/nq065pRrfmY.jpg?size=1344x2160&quality=95&sign=f8ddbf76f5d328636f0eab77cbcefc68&type=album"
        ></img>
        <img
          alt="friends_photo"
          className="profile__friends_photo"
          src="https://sun9-20.userapi.com/impg/nQo9r7AS1nSeEhiaf3Nt7NrMCUI2rwON_WIE0Q/nq065pRrfmY.jpg?size=1344x2160&quality=95&sign=f8ddbf76f5d328636f0eab77cbcefc68&type=album"
        ></img>

        <img
          alt="friends_photo"
          className="profile__friends_photo"
          src="https://sun9-20.userapi.com/impg/nQo9r7AS1nSeEhiaf3Nt7NrMCUI2rwON_WIE0Q/nq065pRrfmY.jpg?size=1344x2160&quality=95&sign=f8ddbf76f5d328636f0eab77cbcefc68&type=album"
        ></img>
      </div>
    </div>
  );
}
