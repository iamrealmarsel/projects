import { useContext } from 'react';
import Card from '../components/Card';
import AppContext from '../context';
import Main from '../layouts/Main';

function Favorites(props) {
  const { searchValue, onSearchChange, isLoading } = props;
  const { favorites, handleRemoveFavoriteClick, handlePlusClickFromFavorites, isAddedFromFavorites, isFavorite } =
    useContext(AppContext);

  const renderItems = () => {
    const filteredFavorites = favorites.filter((favorite) => {
      return favorite.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (isLoading ? [...Array(8)] : filteredFavorites).map((val, index) => (
      <Card
        {...val}
        key={index}
        favorited={true}
        onPlusClick={handlePlusClickFromFavorites}
        onFavoriteClick={handleRemoveFavoriteClick}
        isFavorite={isFavorite}
        isAdded={isAddedFromFavorites}
        loading={isLoading}
      />
    ));
  };

  return (
    <Main onSearchChange={onSearchChange} searchValue={searchValue} title='Мои закладки'>
      {renderItems()}
    </Main>
  );
}

export default Favorites;
