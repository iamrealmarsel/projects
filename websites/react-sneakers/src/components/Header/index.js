import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import cn from './Header.module.scss';

function Header(props) {
  const { onCartClick } = props;
  const { totalPrice } = useCart();

  return (
    <header className={cn.header}>
      <Link to='/'>
        <div className={cn.headerLeft}>
          <img width='40' height='40' src='img/logo.png' alt='' />
          <div className={cn.headerInfo}>
            <h3 className={cn.headerInfoTitle}>React Sneackers</h3>
            <p className={cn.headerInfoDesc}>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className={cn.headerRight}>
        <li onClick={onCartClick} className={cn.headerRightCart}>
          <img src='img/cart.svg' alt='' />
          <span>{totalPrice} руб.</span>
        </li>
        <li className={cn.headerRightFavorites}>
          <Link to='/favorites'>
            <img src='img/favorites.svg' alt='' />
          </Link>
        </li>
        <li className={cn.headerRightProfile}>
          <Link to='/orders'>
            <img src='img/user.svg' alt='' />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
