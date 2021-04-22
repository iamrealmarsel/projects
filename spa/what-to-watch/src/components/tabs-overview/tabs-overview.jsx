import React from 'react';
import {moviePropTypes} from 'store/prop-types';
import {convertRatingToText} from 'store/selector';


const TabsOverview = (props) => {
  const {rating, votes, description, director, starring} = props.movie;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{convertRatingToText(rating)}</span>
          <span className="movie-rating__count">{votes} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

TabsOverview.propTypes = {
  movie: moviePropTypes,
};


export default TabsOverview;
