import React from 'react';

export const ProfileInfoContactsLink = (props: ProfileInfoContactsLinkPropsType) => {
  return (
    <div className="contacts__link">
      {props.link !== null ? (
        <a
          className="profile__label-link"
          href={`https://${props.link}`}
          target="_blank"
          rel="noreferrer"
        >
          {props.name}
        </a>
      ) : (
        ''
      )}
    </div>
  );
};

type ProfileInfoContactsLinkPropsType = {
  link: string | null;
  name: string;
};
