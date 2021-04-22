import {connect} from 'react-redux';
import {fetchComments} from 'store/actions/async';


const mapDispatchToProps = {
  fetchCommentsAction: fetchComments,
};

const mapStateToProps = ({movies}) => ({
  commentsCheck: movies.commentsCheck,
});


export default connect(mapStateToProps, mapDispatchToProps);
