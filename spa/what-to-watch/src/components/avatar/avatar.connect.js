import {connect} from 'react-redux';


const mapStateToProps = ({user}) => ({
  isAuthenticated: user.isAuthenticated,
  avatarLink: user.avatar,
});


export default connect(mapStateToProps);
