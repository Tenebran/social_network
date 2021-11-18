import { createSelector } from 'reselect';
import { AppStateType } from './store/store';

export const getUsersSelector = (state: AppStateType) => {
  return state.users;
};

export const getPageSizeSelector = (state: AppStateType) => {
  return state.users.pageSize;
};

export const getTotalUsersCountSelector = (state: AppStateType) => {
  return state.users.totalUsersCount;
};

export const getCurrentPageSelector = (state: AppStateType) => {
  return state.users.currentPage;
};

export const getIsFetchingSelector = (state: AppStateType) => {
  return state.users.isFetching;
};

export const getFollowingInProgressSelector = (state: AppStateType) => {
  return state.users.followingInProgress;
};

export const getUsersSuperSelector = createSelector(getUsersSelector, users => {
  return users.usersData.filter(u => true);
});
