import {createStore} from 'redux';
import rootReducer from 'store/root-reducer';
import {loadMoviePromo} from 'store/actions/load';


export const noop = () => {};
export const VISIBLE_MOVIES_COUNT = 16;
export const ID = 1;
export const RATING_STARS = [false, false, true, false, false];
export const TAB = `details`;
export const PREVIEW = `img/aviator.jpg`;
export const PREVIEW_VIDEO = `https://upload.wikimedia.org/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
export const TITLE = `Bohemian Rhapsody`;
export const CURRENT_GENRE = `Comedy`;
export const ALL_GENRES = `All genres`;
export const GENRES = [`Comedy`, `Crime`, `Documentary`, `Drama`, `Horror`, `Kids & Family`];
export const MATCH = {params: {id: 1}};
export const PARAMS = {id: 1};

export const MOVIES = [
  {
    description: `A young man who was sentenced to seven years`,
    rating: 3.6,
    director: `Nicolas Winding Refn`,
    genre: `Action`,
    starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    id: 1,
    title: `Bronson`,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    preview: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    background: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    backgroundColor: `#73B39A`,
    previewVideo: `https://upload.wikimedia.org/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    votes: 109661,
    runtime: 92,
    releaseYear: 2008,
    myList: false,
    comments: false,
  },
  {
    description: `A young man who was sentenced to seven years`,
    rating: 3.6,
    director: `Nicolas Winding Refn`,
    genre: `Action`,
    starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    id: 2,
    title: `Bronson`,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    preview: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    background: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    backgroundColor: `#73B39A`,
    previewVideo: `https://upload.wikimedia.org/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    votes: 109661,
    runtime: 92,
    releaseYear: 2008,
    myList: false,
    comments: false,
  },
];

export const MOVIE = {
  description: `A young man who was sentenced to seven years`,
  rating: 3.6,
  director: `Nicolas Winding Refn`,
  starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
  genre: `Action`,
  id: 3,
  title: `Bronson`,
  poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
  preview: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
  background: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
  backgroundColor: `#73B39A`,
  previewVideo: `https://upload.wikimedia.org/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  video: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  votes: 109661,
  runtime: 92,
  releaseYear: 2008,
  myList: false,
  comments: false,
};

export const REVIEWS = [
  {
    id: 111,
    rating: 3.3,
    date: `2020-10-09T13:38:44.769Z`,
    author: `Christina`,
    message: `This film is an experience and i has already seen it 4 times`,
  },
  {
    id: 222,
    rating: 3.3,
    date: `2020-10-09T13:38:44.769Z`,
    author: `Christina`,
    message: `This film is an experience and i has already seen it 4 times`,
  }
];

const store = createStore(rootReducer);
store.dispatch(loadMoviePromo(MOVIE));
export {store};
