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
  return (
    <div className="profile__label-more">
      <div className="contacts__link">
        {props.contacts?.facebook ? (
          <a
            className="profile__label-link"
            href={`https://${props.contacts?.facebook}`}
            target="_blank"
          >
            Faceboock
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {props.contacts?.github ? (
          <a
            className="profile__label-link"
            href={`https://${props.contacts?.github}`}
            target="_blank"
          >
            Github
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {props.contacts?.instagram ? (
          <a
            className="profile__label-link"
            href={`https://${props.contacts?.instagram}`}
            target="_blank"
          >
            Instagram
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {props.contacts?.mainLink ? (
          <a
            className="profile__label-link"
            href={`https://${props.contacts?.mainLink}`}
            target="_blank"
          >
            MainLink
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {props.contacts?.vk ? (
          <a className="profile__label-link" href={`https://${props.contacts?.vk}`} target="_blank">
            vk
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {props.contacts?.website ? (
          <a
            className="profile__label-link"
            href={`https://${props.contacts?.website}`}
            target="_blank"
          >
            Website
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="contacts__link">
        {props.contacts?.youtube ? (
          <a
            className="profile__label-link"
            href={`https://${props.contacts?.youtube}`}
            target="_blank"
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
