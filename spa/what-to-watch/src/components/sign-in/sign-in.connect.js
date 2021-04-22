import {connect} from 'react-redux';
import {login} from 'store/actions/async';


const mapDispatchToProps = {
  loginAction: login,
};


export default connect(null, mapDispatchToProps);
