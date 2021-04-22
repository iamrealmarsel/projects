import React from 'react';
import connect from 'components/my-list/my-list.connect';
import PropTypes from 'prop-types';
import MovieList from 'components/movie-list/movie-list';
import Header from 'components/header/header';
import {moviesPropTypes} from 'store/prop-types';
import {Title} from 'const';
import Footer from 'components/footer/footer';


const MyList = (props) => {
  const {movies, onMovieCardClick} = props;

  return (
    <div className="user-page">

      <Header title={Title.MY_LIST} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList movies={movies} onMovieCardClick={onMovieCardClick} />
      </section>

      <Footer />

    </div>
  );
};

MyList.propTypes = {
  movies: moviesPropTypes,
  onMovieCardClick: PropTypes.func.isRequired,
};


export {MyList};
export default connect(MyList);
