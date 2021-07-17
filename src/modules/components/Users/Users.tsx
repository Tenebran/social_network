import axios from 'axios';
import React from 'react';
import { UsersType, UsersDataType } from '../../../redux/users-reducer';
import User from './User/User';
import './Users.scss';

type PropsType = {
  users: UsersType;
  follow: (userId: string) => void;
  unFollow: (userID: string) => void;
  setUsers: (users: Array<UsersDataType>) => void;
};

export default class Users extends React.Component<PropsType> {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <div className="users">
        {this.props.users.usersData.map(user => {
          return (
            <User
              key={user.id}
              userId={user.id}
              userName={user.name}
              // userCity={user.location.city}
              // userContry={user.location.country}
              userImage={user.photos}
              userFollowed={user.followed}
              follow={this.props.follow}
              unFollow={this.props.unFollow}
            />
          );
        })}
      </div>
    );
  }
}
