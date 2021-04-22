import {ActionType} from 'const';


export const enableAuth = (status) => ({
  type: ActionType.ENABLE_AUTH,
  status
});

export const addAvatarLink = (link) => ({
  type: ActionType.ADD_AVATAR_LINK,
  link
});
