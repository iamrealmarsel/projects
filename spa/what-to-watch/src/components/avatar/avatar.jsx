import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import connect from 'components/avatar/avatar.connect';


const Avatar = (props) => {
  const {isAuthenticated, avatarLink} = props;

  return (
    <div className="user-block">
      { isAuthenticated
        ? <div className="user-block__avatar">
          <Link to="/mylist"><img src={avatarLink} alt="User avatar" width="63" height="63" /></Link>
        </div>

        : <Link to="/login" className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

Avatar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  avatarLink: PropTypes.string.isRequired,
};


export {Avatar};
export default connect(Avatar);
