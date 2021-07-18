import axios from 'axios';
import React from 'react';
import { UsersType, UsersDataType } from '../../../redux/users-reducer';
import User from './User/User';
import './Users.scss';

type PropsType = {
  users: UsersType;
  currentPage: number;
  totalUsersCount: number;
  pageSize: number;
  follow: (userId: string) => void;
  unFollow: (userID: string) => void;
  setUsers: (users: Array<UsersDataType>) => void;
  setCurrentPage: (page: number) => void;
  setTotalUsersCount: (pageCount: number) => void;
};

export default class Users extends React.Component<PropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (page: number) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = this.props.users.totalUsersCount / this.props.users.pageSize;
    let pageArray = [];

    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
      pageArray.push(i);
    }

    return (
      <div className="users">
        <div className="users__selected">
          {pageArray.map(page => {
            return (
              <span
                onClick={() => this.onPageChanged(page)}
                className={
                  this.props.currentPage === page ? 'users__selected_page' : 'users__selected_not'
                }
                key={page}
              >
                {page}
              </span>
            );
          })}
        </div>

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
