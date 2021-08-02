import axios from 'axios';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import Cart from '../Cart';
import CartItems from '../CartItems';
import cn from './Drawer.module.scss';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Drawer(props) {
  const { onCloseClick, onRemoveClick, onOrderClick, opened } = props;
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { cartItems, setCartItems, totalPrice } = useCart();

  const handleOrderClick = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.post('https://60de0abd878c890017fa2d30.mockapi.io/orders', { items: cartItems });

      onOrderClick(data);
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://60de0abd878c890017fa2d30.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('ошибка при создании заказа');
    }

    setIsLoading(false);
  };

  return (
    <div className={`${cn.overlay} ${opened ? cn.overlayVisible : ''}`} onClick={onCloseClick}>
      <div className={cn.drawer}>
        <h2>
          Корзина
          <img className={cn.cartItemRemove} src='img/button-remove.svg' alt='remove' onClick={onCloseClick} />
        </h2>

        {cartItems.length > 0 ? (
          <CartItems
            onRemoveClick={onRemoveClick}
            items={cartItems}
            onOrderClick={handleOrderClick}
            isLoading={isLoading}
            totalPrice={totalPrice}
          />
        ) : (
          <Cart
            title={isOrderCompleted ? 'Заказ оформлен!' : 'Корзина пуста'}
            description={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderCompleted ? 'img/order.png' : 'img/cart.png'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
