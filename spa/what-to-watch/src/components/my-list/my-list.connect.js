import {connect} from 'react-redux';
import {getMyList} from 'store/selector';


const mapStateToProps = ({load}) => ({
  movies: getMyList(load.movies),
});


export default connect(mapStateToProps);
