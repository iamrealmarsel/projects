import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoPlayer from 'components/video-player/video-player';
import {moviePropTypes} from 'store/prop-types';


const MovieCard = (props) => {
  const {movie, onMovieCardClick} = props;
  const {title, preview, previewVideo, id} = movie;
  let timeoutID = null;

  const [isVideo, setIsVideo] = React.useState(false);

  React.useEffect(() => {
    return () => clearTimeout(timeoutID);
  });

  const playVideo = (element) => {
    if (element) {
      timeoutID = setTimeout(() => element.play(), 1000);
    }
  };

  const handleMouseEnter = () => {
    setIsVideo(true);
  };

  const handleMouseLeave = () => {
    setIsVideo(false);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => onMovieCardClick(id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          previewVideo={previewVideo}
          preview={preview}
          title={title}
          isVideo={isVideo}
          playVideo={playVideo}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: moviePropTypes,
  onMovieCardClick: PropTypes.func.isRequired,
};


export default MovieCard;
