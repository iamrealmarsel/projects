import React from 'react';
import PropTypes from 'prop-types';
import {moviePropTypes} from 'store/prop-types';
import connect from 'components/my-list-button/my-list-button.connect';


const MyListButton = (props) => {
  const {changeMyListAction, movie} = props;
  const {id, myList} = movie;

  const changeMyList = () => {
    changeMyListAction(id, Number(!myList));
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={changeMyList}
    >

      { myList
        ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      }

      <span>My list</span>

    </button>
  );
};

MyListButton.propTypes = {
  changeMyListAction: PropTypes.func.isRequired,
  movie: moviePropTypes,
};


export {MyListButton};
export default connect(MyListButton);
