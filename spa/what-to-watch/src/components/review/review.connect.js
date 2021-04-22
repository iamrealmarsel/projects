import {connect} from 'react-redux';
import {postComment} from 'store/actions/async';


const mapStateToProps = ({load}) => ({
  movies: load.movies,
});

const mapDispatchToProps = {
  postCommentAction: postComment,
};


export default connect(mapStateToProps, mapDispatchToProps);
