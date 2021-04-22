import React from 'react';
import PropTypes from 'prop-types';
import {moviesPropTypes} from 'store/prop-types';
import {getMovieByID} from 'store/selector';
import connect from 'components/player/player.connect';
import browserHistory from 'browser-history';
import {getElapsedTime, getTogglerProgress} from 'store/selector';


const Player = (props) => {
  const {movies, params} = props;
  const id = Number(params.id);
  const currentMovie = getMovieByID(movies, id);
  const {video, title} = currentMovie;

  const [isPlaying, setIsPlaying] = React.useState(true);
  const [elapsedTime, setElapsedTime] = React.useState(null);
  const [togglerProgress, setTogglerProgress] = React.useState(0);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener(`timeupdate`, updateElapsedTime);

    return () => videoElement.removeEventListener(`timeupdate`, updateElapsedTime);
  }, []);

  const handlePlayClick = () => {
    const videoElement = videoRef.current;

    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleFullScreenClick = () => {
    const videoElement = videoRef.current;
    videoElement.requestFullscreen();
  };

  const handleExitClick = () => {
    browserHistory.push(`/films/${id}`);
  };

  const updateElapsedTime = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;

    setElapsedTime(getElapsedTime(currentTime, duration));
    setTogglerProgress(getTogglerProgress(currentTime, duration));
  };

  return (
    <div className="player">
      <video src={video} className="player__video" poster="img/player-poster.jpg" autoPlay ref={videoRef} >
      </video>

      <button type="button" className="player__exit" onClick={handleExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={togglerProgress} max="100"></progress>
            <div className="player__toggler" style={{left: `${togglerProgress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">
            { elapsedTime }
          </div>
        </div>

        <div className="player__controls-row">

          <button type="button" className="player__play" onClick={handlePlayClick}>
            { isPlaying
              ?
              <React.Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </React.Fragment>
              :
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause-s"></use>
                </svg>
                <span>Play</span>
              </React.Fragment>
            }
          </button>

          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick} >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  movies: moviesPropTypes,
  params: PropTypes.object.isRequired,
};


export {Player};
export default connect(Player);
