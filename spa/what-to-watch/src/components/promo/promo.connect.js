import {connect} from 'react-redux';
import {changeMyList} from 'store/actions/async';


const mapStateToProps = ({load, user}) => ({
  moviePromo: load.moviePromo,
  isAuthenticated: user.isAuthenticated,
});

const mapDispatchToProps = {
  changeMyListAction: changeMyList,
};


export default connect(mapStateToProps, mapDispatchToProps);
