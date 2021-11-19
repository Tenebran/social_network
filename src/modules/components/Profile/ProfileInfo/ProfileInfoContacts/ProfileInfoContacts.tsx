import React from 'react';
import { v1 } from 'uuid';
import './ProfileInfoContacts.scss';
import { ProfileInfoContactsLink } from './ProfileInfoContactsLink/ProfileInfoContactsLink';

type contacts = {
  facebook: string | null;
  github: string | null;
  instagram: string | null;
  mainLink: string | null;
  twitter: string | null;
  vk: string | null;
  website: string | null;
  youtube: string | null;
};

type PropsType = {
  contacts: contacts | undefined;
};

const ProfileInfoContacts = React.memo((props: PropsType) => {
  const faceboock = props.contacts?.facebook
    ? props.contacts?.facebook.replace('https://', '')
    : null;
  const github = props.contacts?.github ? props.contacts?.github.replace('https://', '') : null;
  const instagram = props.contacts?.instagram
    ? props.contacts?.instagram.replace('https://', '')
    : null;
  const mainLink = props.contacts?.mainLink
    ? props.contacts?.mainLink.replace('https://', '')
    : null;
  const vk = props.contacts?.vk ? props.contacts?.vk.replace('https://', '') : null;
  const website = props.contacts?.website ? props.contacts?.website.replace('https://', '') : null;
  const youtube = props.contacts?.youtube ? props.contacts?.youtube.replace('https://', '') : null;

  const linkList = [
    { link: faceboock, name: 'Faceboock', key: v1() },
    { link: github, name: 'Github', key: v1() },
    { link: instagram, name: 'Instagram', key: v1() },
    { link: mainLink, name: 'MainLink', key: v1() },
    { link: vk, name: 'VK', key: v1() },
    { link: website, name: 'Website', key: v1() },
    { link: youtube, name: 'Youtube', key: v1() },
  ];

  return (
    <div className="profile__label">
      <div className="profile__label-name">Contacts:</div>
      <div className="profile__label-more">
        {linkList.map(list => (
          <ProfileInfoContactsLink link={list.link} name={list.name} key={list.key} />
        ))}
      </div>
    </div>
  );
});

export default ProfileInfoContacts;
