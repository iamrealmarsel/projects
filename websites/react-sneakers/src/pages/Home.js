import { useContext } from 'react';
import Card from '../components/Card';
import Slider from '../components/Slider';
import AppContext from '../context';
import Main from '../layouts/Main';

function Home(props) {
  const { searchValue, onSearchChange, isLoading } = props;
  const { isFavorite, isAdded, handleFavoriteClick, handlePlusClick, items } = useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (isLoading ? [...Array(8)] : filteredItems).map((val, index) => (
      <Card
        key={index}
        onPlusClick={handlePlusClick}
        onFavoriteClick={handleFavoriteClick}
        loading={isLoading}
        isFavorite={isFavorite}
        isAdded={isAdded}
        {...val}
      />
    ));
  };

  return (
    <>
      <Slider />
      <Main onSearchChange={onSearchChange} searchValue={searchValue} title='Все кроссовки'>
        {renderItems()}
      </Main>
    </>
  );
}

export default Home;
