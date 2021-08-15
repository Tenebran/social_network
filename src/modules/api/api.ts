import axios from 'axios';

const istance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': 'e2aa960b-33d4-4875-9d72-648602b61592' },
});

export const API = {
  getUsers(currentPage: number, pageSize: number) {
    return istance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },

  followUser(userId: string) {
    return istance.post(`follow/${userId}`).then(response => response.data);
  },

  unFollowUser(userId: string) {
    return istance.delete(`/follow/${userId}`).then(response => response.data);
  },

  getMyProfile(userId: string) {
    console.warn('Obsolete method. Please profileAPI object.');
    return profileAPI.getMyProfile(userId);
  },

  getMyLogin() {
    return istance.get(`auth/me`).then(response => response.data);
  },
};

export const profileAPI = {
  getMyProfile(userId: string) {
    return istance.get(`/profile/${userId}`).then(response => response.data);
  },

  getStatus(userId: string) {
    return istance.get(`profile/status/${userId}`).then(response => response.data);
  },
  updateStatus(status: string) {
    return istance.put(`profile/status`, { status });
  },
};
