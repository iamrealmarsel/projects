import {ActionType} from 'const';


const initialState = {
  isAuthenticated: false,
  avatar: ``,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ENABLE_AUTH:
      return Object.assign(
          {},
          state,
          {
            isAuthenticated: action.status,
          });

    case ActionType.ADD_AVATAR_LINK:
      return Object.assign(
          {},
          state,
          {
            avatar: action.link,
          });
  }

  return state;
};


export default user;
