import {connect} from 'react-redux';


const mapStateToProps = ({load, user}) => ({
  movies: load.movies,
  isAuthenticated: user.isAuthenticated,
});


export default connect(mapStateToProps);
