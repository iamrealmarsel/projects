import React from 'react';
import PropTypes from 'prop-types';
import connect from 'components/review/review.connect';
import RatingStars from 'components/rating-stars/rating-stars';
import Header from 'components/header/header';
import {isSmallAmountOfText, isTextLimitExceeded} from 'utils';
import {moviesPropTypes} from 'store/prop-types';
import {getMovieByID} from 'store/selector';
import {SHAKE_ANIMATION_TIMEOUT} from 'const';


const formDataState = {
  ratingStarsChecks: [false, false, true, false, false],
  text: ``,
};

const formDisabledState = {
  postButton: true,
  textArea: false,
};

const Review = (props) => {
  const {movies, postCommentAction} = props;
  const id = Number(props.match.params.id);
  const currentMovie = getMovieByID(movies, id);
  const {title, background, poster} = currentMovie;

  const [formData, setData] = React.useState(formDataState);
  const [formDisabled, setIsDisabled] = React.useState(formDisabledState);
  const [errorShake, setIsError] = React.useState(false);

  const handleStarClick = (checked, index) => {
    const newRatingStarsCheked = Array(5).fill(false);
    newRatingStarsCheked[index] = checked;
    setData((prevState) => Object.assign({}, prevState, {ratingStarsChecks: newRatingStarsCheked}));
  };

  const handleTextChange = (text) => {
    if (isTextLimitExceeded(text)) {
      return;
    }
    setData((prevState) => Object.assign({}, prevState, {text}));
    setIsDisabled((prevState) => Object.assign({}, prevState, {postButton: isSmallAmountOfText(text)}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const rating = formData.ratingStarsChecks.indexOf(true) + 1;
    const text = formData.text;

    setIsDisabled((prevState) => Object.assign({}, prevState, {
      postButton: true,
      textArea: true,
    }));

    postCommentAction(rating, text, id)
      .then(() => {
        setIsDisabled((prevState) => Object.assign({}, prevState, {
          postButton: false,
          textArea: false,
        }));
      })
      .catch(() => {
        setIsDisabled((prevState) => Object.assign({}, prevState, {
          postButton: false,
          textArea: false,
        }));
        reportError();
      });
  };

  const reportError = () => {
    setIsError(true);
    setTimeout(() => setIsError(false), SHAKE_ANIMATION_TIMEOUT);
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header id={id} movieTitle={title} />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="" className={`add-review__form ${errorShake ? `shake` : ``} `} onSubmit={handleSubmit} >
          <div className="rating">
            <div className="rating__stars">
              {formData.ratingStarsChecks.map((starCheck, index) => (
                <RatingStars
                  key={index}
                  index={index}
                  starCheck={starCheck}
                  onStarClick={(checked) => handleStarClick(checked, index)} />
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text" id="review-text"
              placeholder="Review text"
              onChange={(event) => handleTextChange(event.target.value)}
              disabled={formDisabled.textArea}
              value={formData.text}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={formDisabled.postButton} >Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

Review.propTypes = {
  movies: moviesPropTypes,
  postCommentAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};


export {Review};
export default connect(Review);
