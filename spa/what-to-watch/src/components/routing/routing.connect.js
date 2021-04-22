import {connect} from 'react-redux';


const mapStateToProps = ({user}) => ({
  isAuthenticated: user.isAuthenticated,
});


export default connect(mapStateToProps);
