import React from 'react';
import {reviewsPropTypes} from 'store/prop-types';
import {formatDate} from 'store/selector';


const TabsReviews = (props) => {
  const {reviews} = props;

  const reviewsElements = reviews.map((review) => (
    <div key={review.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.message}</p>
        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={review.date}>{formatDate(review.date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{review.rating}</div>
    </div>
  ));

  const halfOfArray = Math.ceil(reviewsElements.length / 2);
  const firstHalfReviewsElements = reviewsElements.slice(0, halfOfArray);
  const secondHalfReviewsElements = reviewsElements.slice(halfOfArray);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstHalfReviewsElements}
      </div>
      <div className="movie-card__reviews-col">
        {secondHalfReviewsElements}
      </div>
    </div>
  );
};

TabsReviews.propTypes = {
  reviews: reviewsPropTypes,
};


export default TabsReviews;
