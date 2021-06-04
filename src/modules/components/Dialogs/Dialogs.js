import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.scss';
import Message from './Message/Message';

export default function Dialogs() {
  let userImage =
    'https://sun1-87.userapi.com/s/v1/ig2/cgURU66rcM0MDXpDB-lP4i1uJ_x84k0fVZ9HDyr9MorW4wmHO5C9Ix8XZigcNNq-DgS2Em9rMGzz-klIwyeMjyY1.jpg?size=400x0&quality=96&crop=1,271,1615,1615&ava=1';
  return (
    <div className="dialogs">
      <div className="dialogs__contacts">
        <DialogItem name="Sofia Zaulychnova" id="1" image={userImage} />
        <DialogItem name="dfsgasr" id="2" image={userImage} />
        <DialogItem name="fgsdfsg" id="3" image={userImage} />
        <DialogItem name="fgfdsggfds" id="4" image={userImage} />
        <DialogItem name="fggfgfsdfg" id="5" image={userImage} />
        <DialogItem name="fggfgfsdfg" id="5" image={userImage} />
      </div>

      <div className="dialogs__messages">
        <div className="dialogs__messages__header">
          <div className="dialogs__messages__user_name">Sofia Zaulychnova</div>
        </div>
        <Message message="Hello" userIcon={userImage} userName="Sofia Zaulychnova" />
        <Message message="dfrs" userIcon={userImage} userName="Sofia Zaulychnova" />
        <Message message="fsgsdfg" userIcon={userImage} userName="Sofia Zaulychnova" />
        <Message message="fgsd" userIcon={userImage} userName="Sofia Zaulychnova" />
        <Message message="fdgdhr" userIcon={userImage} userName="Sofia Zaulychnova" />
      </div>
    </div>
  );
}
