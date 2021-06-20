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
  'https://sun1-87.userapi.com/s/v1/ig2/cgURU66rcM0MDXpDB-lP4i1uJ_x84k0fVZ9HDyr9MorW4wmHO5C9Ix8XZigcNNq-DgS2Em9rMGzz-klIwyeMjyY1.jpg?size=400x0&quality=96&crop=1,271,1615,1615&ava=1';

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
        messages: 'fhtrh',
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
        name: 'Sofia Zaulychnova',
        image: userImage,
      },
      {
        id: v1(),
        name: 'fhtrh',
        image: userImage,
      },
      {
        id: v1(),
        name: 'fdhtrhrthrthrhzt',
        image: userImage,
      },
      {
        id: v1(),
        name: 'dhghrtdhrthtrhtrhtr',
        image: userImage,
      },
      {
        id: v1(),
        name: 'hgdhtthhtehte',
        image: userImage,
      },
      {
        id: v1(),
        name: 'dghtehz4rnm',
        image: userImage,
      },
    ],

    messagesData: [
      {
        id: v1(),
        messages: 'Hello',
        image: userImage,
        userName: 'Sofia Zaulychnova',
      },
      {
        id: v1(),
        messages: 'fhtrh',
        image: userImage,
        userName: 'Sofia Zaulychnova',
      },
      {
        id: v1(),
        messages: 'fdhtrhrthrthrhzt',
        image: userImage,
        userName: 'Sofia Zaulychnova',
      },
      {
        id: v1(),
        messages: 'dhghrtdhrthtrhtrhtr',
        image: userImage,
        userName: 'Sofia Zaulychnova',
      },
      {
        id: v1(),
        messages: 'hgdhtthhtehte',
        image: userImage,
        userName: 'Sofia Zaulychnova',
      },
      {
        id: v1(),
        messages: 'dghtehz4rnm',
        image: userImage,
        userName: 'Sofia Zaulychnova',
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

export default state;
