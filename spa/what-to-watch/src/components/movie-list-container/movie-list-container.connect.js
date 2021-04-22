import {connect} from 'react-redux';
import {getMoviesByGenre} from 'store/selector';
import {showMoreMovies} from 'store/actions/movies';


const mapStateToProps = ({load, movies}) => ({
  visibleMoviesCount: movies.visibleMoviesCount,
  movies: getMoviesByGenre(load.movies, movies.currentGenre),
});

const mapDispatchToProps = {
  showMoreMoviesAction: showMoreMovies,
};


export default connect(mapStateToProps, mapDispatchToProps);
