import {loadMovies, loadMoviePromo, loadComments} from 'store/actions/load';
import {enableApplication, displayСomments} from 'store/actions/movies';
import {enableAuth, addAvatarLink} from 'store/actions/user';
import browserHistory from 'browser-history';


const adaptMovieToClient = (movie) => {
  const adaptedMovie = Object.assign(
      {},
      movie,
      {
        title: movie.name,
        poster: movie.poster_image,
        preview: movie.preview_image,
        background: movie.background_image,
        backgroundColor: movie.background_color,
        previewVideo: movie.preview_video_link,
        video: movie.video_link,
        votes: movie.scores_count,
        runtime: movie.run_time,
        releaseYear: movie.released,
        myList: movie.is_favorite,
        comments: false,
      }
  );

  delete adaptedMovie.name;
  delete adaptedMovie.poster_image;
  delete adaptedMovie.preview_image;
  delete adaptedMovie.background_image;
  delete adaptedMovie.background_color;
  delete adaptedMovie.preview_video_link;
  delete adaptedMovie.video_link;
  delete adaptedMovie.scores_count;
  delete adaptedMovie.run_time;
  delete adaptedMovie.released;
  delete adaptedMovie.is_favorite;

  return adaptedMovie;
};

const adaptCommentToClient = (comment) => {
  const adaptedComment = Object.assign(
      {},
      comment,
      {
        author: comment.user.name,
        authorID: comment.user.id,
        message: comment.comment,
      }
  );

  delete adaptedComment.user;
  delete adaptedComment.comment;

  return adaptedComment;
};

const adaptAuthInfoToClient = (authInfo) => {
  const adaptedAuthInfo = Object.assign(
      {},
      authInfo,
      {
        avatarLink: authInfo.avatar_url,
      }
  );

  delete adaptedAuthInfo.avatar_url;

  return adaptedAuthInfo;
};

const fetchMovies = (dispatch, axios) => {
  return axios.get(`/films`)
    .then(({data}) => {
      const movies = data.map((movie) => adaptMovieToClient(movie));
      dispatch(loadMovies(movies));
    })
    .catch(() => {});
};

const fetchMoviePromo = (dispatch, axios) => {
  return axios.get(`/films/promo`)
    .then(({data}) => {
      const moviePromo = adaptMovieToClient(data);
      dispatch(loadMoviePromo(moviePromo));
    })
    .catch(() => {});
};

const checkAuth = (dispatch, axios) => {
  return axios.get(`/login`)
    .then(({data}) => {
      const {avatarLink} = adaptAuthInfoToClient(data);
      dispatch(addAvatarLink(avatarLink));
      dispatch(enableAuth(true));
    })
    .catch(() => {});
};

export const init = () => (dispatch, _getState, axios) => {
  Promise.all([
    fetchMovies(dispatch, axios),
    fetchMoviePromo(dispatch, axios),
    checkAuth(dispatch, axios)
  ])
    .then(() => dispatch(enableApplication()))
    .catch(() => {});
};

export const login = ({email, password}) => (dispatch, _getState, axios) => {
  return axios.post(`/login`, {email, password})
    .then(({data}) => {
      const {avatarLink} = adaptAuthInfoToClient(data);
      dispatch(enableAuth(true));
      dispatch(addAvatarLink(avatarLink));
    })
    .then(() => {
      fetchMovies(dispatch, axios);
      fetchMoviePromo(dispatch, axios);
    })
    .then(() => browserHistory.push(`/`))
    .catch((err) => {
      throw err;
    });
};

export const fetchComments = (id) => (dispatch, _getState, axios) => {
  axios.get(`/comments/${id}`)
    .then(({data}) => {
      const comments = data.map((comment) => adaptCommentToClient(comment));
      dispatch(loadComments(id, comments));
      dispatch(displayСomments(comments));
    })
    .catch(() => {});
};

export const postComment = (rating, text, id) => (dispatch, _getState, axios) => {
  return axios.post(`/comments/${id}`, {rating, comment: text})
    .then(() => {
      dispatch(fetchComments(id));
      browserHistory.push(`/films/${id}`);
    })
    .catch((err) => {
      throw err;
    });
};

export const changeMyList = (id, status) => (dispatch, _getState, axios) => {
  axios.post(`/favorite/${id}/${status}`)
    .then(() => fetchMovies(dispatch, axios))
    .then(() => fetchMoviePromo(dispatch, axios))
    .catch(() => {});
};

