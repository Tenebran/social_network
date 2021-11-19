import React from 'react';
import { Link } from 'react-router-dom';

export const SiderbarItem = (props: SiderbarItemPropsType) => {
  return (
    <div className="social__sidebar_wrapper">
      <Link to={`${props.link}`} className="social__sidebar_link">
        {props.icon}
        <span className="social__sidebar_text">{props.name}</span>
      </Link>
    </div>
  );
};

type SiderbarItemPropsType = {
  link: string;
  name: string;
  icon: JSX.Element;
};
