import {connect} from 'react-redux';


const mapStateToProps = ({load}) => ({
  movies: load.movies,
});


export default connect(mapStateToProps);
