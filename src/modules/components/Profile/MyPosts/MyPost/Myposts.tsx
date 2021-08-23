import './Myposts.scss';
import Posts from '../Post/Posts';
import { ProfileType } from '../../../../../redux/profile-reducer';
import MyPostTextArea from '../MyPostTextArea/MyPostTextArea';

type PropsType = {
  profile: ProfileType;
  addPost: (title: string) => void;
  noAvatar: string;
};

export default function Myposts(props: PropsType) {
  return (
    <>
      <MyPostTextArea profile={props.profile} addPost={props.addPost} noAvatar={props.noAvatar} />
      <div className="profile__person">
        {props.profile.postData.map(post => (
          <Posts
            key={post.id}
            messages={post.messages}
            image={props.profile.profileInfo.photos.large}
            like={post.like}
            noAvatar={props.noAvatar}
          />
        ))}
      </div>
    </>
  );
}
