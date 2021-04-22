import {connect} from 'react-redux';
import {changeGenre} from 'store/actions/movies';
import {getGenres} from 'store/selector';


const mapStateToProps = ({movies, load}) => ({
  currentGenre: movies.currentGenre,
  genres: getGenres(load.movies),
});

const mapDispatchToProps = {
  changeGenreAction: changeGenre,
};


export default connect(mapStateToProps, mapDispatchToProps);
