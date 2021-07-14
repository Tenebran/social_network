import React from 'react';
import { Link } from 'react-router-dom';
import MessagesIcon from '../../iconComponents/MessagesIcon';
import MusicIcon from '../../iconComponents/MusicIcon';
import NewsIcon from '../../iconComponents/NewsIcon';
import ProfileIcon from '../../iconComponents/ProfileIcon';
import SettingsIcon from '../../iconComponents/SettingsIcon';
import UsersIcon from '../../iconComponents/UsersIcon';
import './Siderbar.scss';

export default function Siderbar() {
  return (
    <div className="social__sidebar">
      <nav className="social__sidebar_nav">
        <div className="social__sidebar_wrapper">
          <Link to="/profile" className="social__sidebar_link">
            <ProfileIcon />
            <span className="social__sidebar_text">My profile</span>
          </Link>
        </div>

        <div className="social__sidebar_wrapper">
          <Link to="/dialogs" className="social__sidebar_link">
            <MessagesIcon />
            <span className="social__sidebar_text">Messages</span>
          </Link>
        </div>
        <div className="social__sidebar_wrapper">
          <Link to="/users" className="social__sidebar_link">
            <UsersIcon />
            <span className="social__sidebar_text">Users</span>
          </Link>
        </div>
        <div className="social__sidebar_wrapper">
          <Link to="/news" className="social__sidebar_link">
            <NewsIcon />
            <span className="social__sidebar_text">News</span>
          </Link>
        </div>
        <div className="social__sidebar_wrapper">
          <Link to="/music" className="social__sidebar_link">
            <MusicIcon />
            <span className="social__sidebar_text">Music</span>
          </Link>
        </div>
        <div>
          <Link to="/settings" className="social__sidebar_link">
            <SettingsIcon />
            <span className="social__sidebar_text">Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
