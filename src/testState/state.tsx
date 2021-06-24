import { v1 } from 'uuid';

export type PostDataType = {
  id?: string;
  image: string;
  like: number;
  messages: string;
};

export type DialogsDataType = {
  id: string;
  name: string;
  image: string;
};

export type messagesData = {
  id: string;
  messages: string;
  image: string;
  userName: string;
};

export type ProfileType = {
  postData: Array<PostDataType>;
  key?: number;
};

export type DialogsType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<messagesData>;
};

export type RootStateType = {
  profile: ProfileType;
  dialogs: DialogsType;
};

let userImage =
  'https://sun9-8.userapi.com/impf/c841537/v841537085/99b1/4grSL5x_cg8.jpg?size=2560x1440&quality=96&sign=c984b423f823ed80c9ad893c6e36c00c&type=album';

let state: RootStateType = {
  profile: {
    postData: [
      {
        id: v1(),
        messages: 'Hello',
        image: userImage,
        like: 10,
      },
      {
        id: v1(),
        messages: 'Heloooooooooooooooooooooooooooooooooooooooooooo',
        image: userImage,
        like: 12,
      },
      {
        id: v1(),
        messages: 'fdhtrhrthrthrhzt',
        image: userImage,
        like: 13,
      },
      {
        id: v1(),
        messages: 'dhghrtdhrthtrhtrhtr',
        image: userImage,
        like: 18,
      },
      {
        id: v1(),
        messages: 'hgdhtthhtehte',
        image: userImage,
        like: 11,
      },
      {
        id: v1(),
        messages: 'dghtehz4rnm',
        image: userImage,
        like: 11,
      },
    ],
  },

  dialogs: {
    dialogsData: [
      {
        id: v1(),
        name: 'Sergiy Garkusha',
        image: userImage,
      },
      {
        id: v1(),
        name: 'Sergiy Garkusha',
        image: userImage,
      },
      {
        id: v1(),
        name: 'Sergiy Garkusha',
        image: userImage,
      },
      {
        id: v1(),
        name: 'Sergiy Garkusha',
        image: userImage,
      },
      {
        id: v1(),
        name: 'Sergiy Garkusha',
        image: userImage,
      },
      {
        id: v1(),
        name: 'Sergiy Garkusha',
        image: userImage,
      },
    ],

    messagesData: [
      {
        id: v1(),
        messages: 'Hello',
        image: userImage,
        userName: 'Sergiy Garkusha',
      },
      {
        id: v1(),
        messages: 'fhtrh',
        image: userImage,
        userName: 'Sergiy Garkusha',
      },
      {
        id: v1(),
        messages: 'fdhtrhrthrthrhzt',
        image: userImage,
        userName: 'Sergiy Garkusha',
      },
      {
        id: v1(),
        messages: 'dhghrtdhrthtrhtrhtr',
        image: userImage,
        userName: 'Sergiy Garkusha',
      },
      {
        id: v1(),
        messages: 'hgdhtthhtehte',
        image: userImage,
        userName: 'Sergiy Garkusha',
      },
      {
        id: v1(),
        messages: 'dghtehz4rnm',
        image: userImage,
        userName: 'Sergiy Garkusha',
      },
    ],
  },
};

let rerenderEntireTree = (state: RootStateType) => {
  console.log('State chaged');
};

export let addPost = (postMassage: string) => {
  let newPost = {
    id: v1(),
    messages: postMassage,
    image: userImage,
    like: 100,
  };

  state.profile.postData.unshift(newPost);
  rerenderEntireTree(state);
};

export let addMessage = (postMassage: string) => {
  let newMessages = {
    id: v1(),
    messages: postMassage,
    image: userImage,
    userName: 'Sergiy Garkusha',
  };
  state.dialogs.messagesData.push(newMessages);
};

export default state;
