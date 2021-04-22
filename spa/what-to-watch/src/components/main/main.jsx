import React from 'react';
import PropTypes from 'prop-types';
import GenreList from 'components/genre-list/genre-list';
import Promo from 'components/promo/promo';
import Footer from 'components/footer/footer';
import MovieListContainer from 'components/movie-list-container/movie-list-container';


const Main = (props) => {
  const {onMovieCardClick} = props;

  return (
    <React.Fragment>

      <Promo />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />
          <MovieListContainer onMovieCardClick={onMovieCardClick}/>

        </section>

        <Footer />

      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  onMovieCardClick: PropTypes.func.isRequired,
};


export default Main;
