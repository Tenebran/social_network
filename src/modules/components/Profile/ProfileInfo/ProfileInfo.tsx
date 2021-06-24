import React from 'react';
import './ProfileInfo.scss';

export default function ProfileInfo() {
  return (
    <div className="profile__person">
      <div className="profile__person_wrapp">
        <span className="profile__person_name">Sergiy</span>
        <span className="profile__person_surname">Garkusha</span>
      </div>
      <div className="profile__label">
        <span className="profile__label-name"> Birthday:</span>
        <span className="profile__label-more">April 04, 1994</span>
      </div>
      <div className="profile__label">
        <span className="profile__label-name"> Current city:</span>
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
