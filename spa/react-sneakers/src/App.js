import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/Header';
import AppContext from './context';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoriteResponse, itemsResponse, ordersResponse] = await Promise.all([
          axios.get('https://60de0abd878c890017fa2d30.mockapi.io/cart'),
          axios.get('https://60de0abd878c890017fa2d30.mockapi.io/favorites'),
          axios.get('https://60de0abd878c890017fa2d30.mockapi.io/items'),
          axios.get('https://60de0abd878c890017fa2d30.mockapi.io/orders'),
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoriteResponse.data);
        setOrders(ordersResponse.data.reduce((acc, val) => [...acc, ...val.items], []));
        setItems(itemsResponse.data);
      } catch (error) {
        alert('ошибка при запросе данных');
      }
    }

    fetchData();
  }, []);

  const handleOrderClick = (product) => {
    setOrders((prev) => [...prev, ...product.items]);
  };

  const handleRemoveProductClick = (id) => {
    try {
      axios.delete(`https://60de0abd878c890017fa2d30.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      alert('не удалось удалить из корзины');
    }
  };

  const handleRemoveFavoriteClick = (product) => {
    try {
      axios.delete(`https://60de0abd878c890017fa2d30.mockapi.io/favorites/${product.id}`);
      setFavorites((prev) => prev.filter((favorite) => favorite.id !== product.id));
    } catch (err) {
      alert('не удалось убрать из фаворитов');
    }
  };

  const handleFavoriteClick = async (product) => {
    try {
      const findFavorite = favorites.find((favorite) => favorite.parentId === product.id);
      if (findFavorite) {
        axios.delete(`https://60de0abd878c890017fa2d30.mockapi.io/favorites/${findFavorite.id}`);
        setFavorites((prev) => prev.filter((favorite) => favorite.parentId !== product.id));
      } else {
        const { data } = await axios.post('https://60de0abd878c890017fa2d30.mockapi.io/favorites', product);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('не удалось отправить в фавориты');
    }
  };

  const handlePlusClick = async (product) => {
    try {
      const findItem = cartItems.find((item) => item.parentId === product.id);
      if (findItem) {
        axios.delete(`https://60de0abd878c890017fa2d30.mockapi.io/cart/${findItem.id}`);
        setCartItems((prev) => prev.filter((item) => item.parentId !== product.id));
      } else {
        const { data } = await axios.post('https://60de0abd878c890017fa2d30.mockapi.io/cart', product);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {}
  };

  const handlePlusClickFromFavorites = async (product) => {
    try {
      const favorite = favorites.find((favorite) => favorite.id === product.id);
      const findItem = cartItems.find((item) => item.parentId === favorite.parentId);
      if (findItem) {
        axios.delete(`https://60de0abd878c890017fa2d30.mockapi.io/cart/${findItem.id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== findItem.id));
      } else {
        product = { ...product, parentId: favorite.parentId };
        const { data } = await axios.post('https://60de0abd878c890017fa2d30.mockapi.io/cart', product);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {}
  };

  const handleCartClick = () => {
    setCartOpened(true);
  };

  const handleCloseCartClick = (e) => {
    if (e.currentTarget === e.target) {
      setCartOpened(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  const isAdded = (id) => cartItems.some((cartItem) => cartItem.parentId === id);
  const isAddedFromFavorites = (id) => {
    const favorite = favorites.find((favorite) => favorite.id === id);
    return cartItems.some((cartItem) => cartItem.parentId === favorite.parentId);
  };
  const isFavorite = (id) => favorites.some((favorite) => favorite.parentId === id);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        items,
        favorites,
        orders,
        isAdded,
        isAddedFromFavorites,
        isFavorite,
        setCartOpened,
        setCartItems,
        handlePlusClick,
        handlePlusClickFromFavorites,
        handleFavoriteClick,
        handleRemoveFavoriteClick,
      }}
    >
      <div className='wrapper'>
        <Drawer
          onCloseClick={handleCloseCartClick}
          onRemoveClick={handleRemoveProductClick}
          onOrderClick={handleOrderClick}
          opened={cartOpened}
        />
        <Header onCartClick={handleCartClick} />
        <Route path='/' exact>
          <Home searchValue={searchValue} onSearchChange={handleSearchChange} isLoading={isLoading} />
        </Route>
        <Route path='/favorites' exact>
          <Favorites searchValue={searchValue} onSearchChange={handleSearchChange} isLoading={isLoading} />
        </Route>
        <Route path='/orders' exact>
          <Orders searchValue={searchValue} onSearchChange={handleSearchChange} isLoading={isLoading} />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
