import {ActionType} from 'const';


export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  genre,
});

export const showMoreMovies = (visibleMoviesCount) => ({
  type: ActionType.SHOW_MORE_MOVIES,
  visibleMoviesCount,
});

export const enableApplication = () => ({
  type: ActionType.ENABLE_APPLICATION,
});

export const displayСomments = (commentsCheck) => ({
  type: ActionType.DISPLAY_СOMMENTS,
  commentsCheck,
});
