export type PostDataType = {
  id?: number;
  image: string;
  like: number;
  messages: string;
};

export type DialogsDataType = {
  id: number;
  name: string;
  image: string;
};

type messagesData = {
  id: number;
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
        id: 1,
        messages: 'Hello',
        image: userImage,
        like: 10,
      },
      {
        id: 2,
        messages: 'fhtrh',
        image: userImage,
        like: 12,
      },
      {
        id: 3,
        messages: 'fdhtrhrthrthrhzt',
        image: userImage,
        like: 13,
      },
      {
        id: 4,
        messages: 'dhghrtdhrthtrhtrhtr',
        image: userImage,
        like: 18,
      },
      {
        id: 5,
        messages: 'hgdhtthhtehte',
        image: userImage,
        like: 11,
      },
      {
        id: 6,
        messages: 'dghtehz4rnm',
        image: userImage,
        like: 11,
      },
    ],
  },

  dialogs: {
    dialogsData: [
      {
        id: 1,
        name: 'Sofia Zaulychnova',
        image: userImage,
      },
      {
        id: 2,
        name: 'fhtrh',
        image: userImage,
      },
      {
        id: 3,
        name: 'fdhtrhrthrthrhzt',
        image: userImage,
      },
      {
        id: 4,
        name: 'dhghrtdhrthtrhtrhtr',
        image: userImage,
      },
      {
        id: 5,
        name: 'hgdhtthhtehte',
        image: userImage,
      },
      {
        id: 6,
        name: 'dghtehz4rnm',
        image: userImage,
      },
    ],

    messagesData: [
      {
        id: 1,
        messages: 'Hello',
        image: userImage,
        userName: 'Sofia Zaulychnova',
      },
      {
        id: 2,
        messages: 'fhtrh',
        image: userImage,
        userName: 'Sofia Zaulychnova',
      },
      {
        id: 3,
        messages: 'fdhtrhrthrthrhzt',
        image: userImage,
        userName: 'Sofia Zaulychnova',
      },
      {
        id: 4,
        messages: 'dhghrtdhrthtrhtrhtr',
        image: userImage,
        userName: 'Sofia Zaulychnova',
      },
      {
        id: 5,
        messages: 'hgdhtthhtehte',
        image: userImage,
        userName: 'Sofia Zaulychnova',
      },
      {
        id: 6,
        messages: 'dghtehz4rnm',
        image: userImage,
        userName: 'Sofia Zaulychnova',
      },
    ],
  },
};

export default state;
