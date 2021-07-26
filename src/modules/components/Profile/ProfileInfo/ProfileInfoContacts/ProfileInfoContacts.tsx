import React from 'react';
import './ProfileInfoContacts.scss';

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

export default function ProfileInfoContacts(props: PropsType) {
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

  return (
    <div className="profile__label-more">
      <div className="contacts__link">
        {faceboock ? (
          <a
            className="profile__label-link"
            href={`https://${faceboock}`}
            target="_blank"
            rel="noreferrer"
          >
            Faceboock
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {github ? (
          <a
            className="profile__label-link"
            href={`https://${github}`}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {instagram ? (
          <a
            className="profile__label-link"
            href={`https://${instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {mainLink ? (
          <a
            className="profile__label-link"
            href={`https://${mainLink}`}
            target="_blank"
            rel="noreferrer"
          >
            MainLink
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {vk ? (
          <a
            className="profile__label-link"
            href={`https://${vk}`}
            target="_blank"
            rel="noreferrer"
          >
            vk
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {website ? (
          <a
            className="profile__label-link"
            href={`https://${website}`}
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {youtube ? (
          <a
            className="profile__label-link"
            href={`https://${youtube}`}
            target="_blank"
            rel="noreferrer"
          >
            Youtube
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
