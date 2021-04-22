import {connect} from 'react-redux';
import {init} from 'store/actions/async';


const mapStateToProps = ({movies}) => ({
  isApplicationReady: movies.isApplicationReady,
});

const mapDispatchToProps = {
  initAction: init,
};


export default connect(mapStateToProps, mapDispatchToProps);
