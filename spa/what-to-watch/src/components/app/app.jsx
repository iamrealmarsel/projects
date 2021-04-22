import React from 'react';
import PropTypes from 'prop-types';
import Routing from 'components/routing/routing';
import connect from 'components/app/app.connect';


const App = (props) => {
  const {isApplicationReady, initAction} = props;

  React.useEffect(() => {
    initAction();
  }, [initAction]);

  return isApplicationReady && <Routing />;
};

App.propTypes = {
  isApplicationReady: PropTypes.bool.isRequired,
  initAction: PropTypes.func.isRequired,
};


export {App};
export default connect(App);
