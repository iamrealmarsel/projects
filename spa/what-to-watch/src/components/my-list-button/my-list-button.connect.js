import {connect} from 'react-redux';
import {changeMyList} from 'store/actions/async';


const mapDispatchToProps = {
  changeMyListAction: changeMyList,
};


export default connect(null, mapDispatchToProps);
