import React from 'react';
import connect from 'components/tabs/tabs.connect';
import PropTypes from 'prop-types';
import {moviePropTypes} from 'store/prop-types';
import {Tab} from 'const';
import TabsOverview from 'components/tabs-overview/tabs-overview';
import TabsDetails from 'components/tabs-details/tabs-details';
import TabsReviews from 'components/tabs-reviews/tabs-reviews';


const Tabs = (props) => {
  const {movie, fetchCommentsAction} = props;
  const {id, comments} = movie;
  let tabContent = null;

  const [tab, setTab] = React.useState(Tab.OVERVIEW);

  switch (tab) {
    case Tab.OVERVIEW:
      tabContent = <TabsOverview movie={movie} />;
      break;
    case Tab.DETAILS:
      tabContent = <TabsDetails movie={movie} />;
      break;
    case Tab.REVIEWS:
      if (comments) {
        tabContent = <TabsReviews reviews={comments}/>;
      } else {
        fetchCommentsAction(id);
      }
      break;
  }

  const handleTabClick = (event) => {
    event.preventDefault();
    const currentTab = event.currentTarget.dataset.tab;
    setTab(currentTab);
  };

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${tab === Tab.OVERVIEW ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={handleTabClick} data-tab={Tab.OVERVIEW}>
              {Tab.OVERVIEW}
            </a>
          </li>
          <li className={`movie-nav__item ${tab === Tab.DETAILS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={handleTabClick} data-tab={Tab.DETAILS}>
              {Tab.DETAILS}
            </a>
          </li>
          <li className={`movie-nav__item ${tab === Tab.REVIEWS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" onClick={handleTabClick} data-tab={Tab.REVIEWS}>
              {Tab.REVIEWS}
            </a>
          </li>
        </ul>
      </nav>
      {tabContent}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  movie: moviePropTypes,
  fetchCommentsAction: PropTypes.func.isRequired,
};


export {Tabs};
export default connect(Tabs);
