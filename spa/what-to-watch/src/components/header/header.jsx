import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Breadcrumbs from 'components/breadcrumbs/breadcrumbs';
import Avatar from 'components/avatar/avatar';


const Header = (props) => {
  const {id, movieTitle, title, noAvatar} = props;

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to='/' className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      { movieTitle && <Breadcrumbs id={id} title={movieTitle} /> }

      { title && <h1 className="page-title user-page__title">{title}</h1> }

      { noAvatar || <Avatar /> }

    </header>
  );
};

Header.propTypes = {
  noAvatar: PropTypes.bool,
  id: PropTypes.number,
  title: PropTypes.string,
  movieTitle: PropTypes.string,
};


export default Header;
