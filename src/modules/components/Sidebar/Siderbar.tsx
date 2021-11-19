import React from 'react';
import { useSelector } from 'react-redux';
import { initialStateSiderbarType } from '../../../redux/siderbar-reducer';
import { AppStateType } from '../../../redux/store/store';
import './Siderbar.scss';
import { SiderbarItem } from './SiderbarItem/SiderbarItem';

const Siderbar = React.memo(() => {
  const siderbarInfo = useSelector<AppStateType, initialStateSiderbarType>(state => state.siderbar);

  return (
    <div className="social__sidebar">
      <nav className="social__sidebar_nav">
        {siderbarInfo.map(menu => (
          <SiderbarItem name={menu.name} link={menu.link} icon={menu.icon} key={menu.key} />
        ))}
      </nav>
    </div>
  );
});

export default Siderbar;
