import React from 'react';
import { v1 } from 'uuid';
import { UsersType, UsersDataType } from '../../../redux/users-reducer';
import User from './User/User';
import './Users.scss';

type PropsType = {
  users: UsersType;
  follow: (userId: string) => void;
  unFollow: (userID: string) => void;
  setUsers: (users: Array<UsersDataType>) => void;
};

export default function Users(props: PropsType) {
  if (props.users.usersData.length === 0) {
    props.setUsers([
      {
        id: v1(),
        followed: false,
        fullName: 'Dmitry Igorev',
        status: 'i am a boss',
        location: { city: 'Minsk', country: 'Belarus' },
        userImage:
          'https://sun9-4.userapi.com/impf/c848528/v848528510/1dbad6/xxjnZcdYNEc.jpg?size=720x864&quality=96&sign=63a053defcc924bdf3e7a817ba23f140&type=album',
      },
      {
        id: v1(),
        followed: true,
        fullName: 'Sergiy Garkusha',
        status: 'i am a boss',
        location: { city: 'Frankenthal', country: 'Germany' },
        userImage:
          'https://sun9-4.userapi.com/impg/1K4hYAURwhy5tvUgevQmSDM9ehMEa16bbsQ3aA/06BjxWaeCUg.jpg?size=674x1080&quality=96&sign=c52ed075c1cfc49908c9ec260ea07620&type=album',
      },
      {
        id: v1(),
        followed: false,
        fullName: 'Olga Victorovna',
        status: 'i am a boss',
        location: { city: 'Moskau', country: 'Russia' },
        userImage:
          'https://sun9-31.userapi.com/impf/c845321/v845321383/1f45ac/yB3vCIeZOaE.jpg?size=1771x1916&quality=96&sign=5781173350a898b160cb83880c960c7f&type=album',
      },
      {
        id: v1(),
        followed: false,
        fullName: 'Victor Andreew',
        status: 'i am a boss',
        location: { city: 'Rostov', country: 'Russia' },
        userImage:
          'https://sun9-68.userapi.com/impg/nMMnefuD2Hhoor_hKlbWl_5I2litSl9I9L-6Hg/08Jwzh4N1Sc.jpg?size=960x1280&quality=96&sign=8babe0936c1b85eb21822ea7eec477ee&type=album',
      },
      {
        id: v1(),
        followed: true,
        fullName: 'Sofia Zayulycnova',
        status: 'i am a boss',
        location: { city: 'Barnaul', country: 'Russsia' },
        userImage:
          'https://sun9-68.userapi.com/impg/c854424/v854424595/22c1b8/iORG5bQqstU.jpg?size=1440x1800&quality=96&sign=8230ada8ec83bab3f7d353a1dddb3c26&type=album',
      },
      {
        id: v1(),
        followed: false,
        fullName: 'Nik Anderson',
        status: 'i am a boss',
        location: { city: 'Berlin', country: 'Germany' },
        userImage:
          'https://sun9-22.userapi.com/impf/c633526/v633526243/745b/T7wGTwjAiWM.jpg?size=766x960&quality=96&sign=9aec1cb1b2f63410a56edb897d84485d&type=album',
      },
    ]);
  }

  return (
    <div className="users">
      {props.users.usersData.map(user => {
        return (
          <User
            key={user.id}
            userId={user.id}
            userName={user.fullName}
            userCity={user.location.city}
            userContry={user.location.country}
            userImage={user.userImage}
            userFollowed={user.followed}
            follow={props.follow}
            unFollow={props.unFollow}
            setUsers={props.setUsers}
          />
        );
      })}
    </div>
  );
}
