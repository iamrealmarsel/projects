import cn from './CartItems.module.scss';

function CartItems(props) {
  const { onRemoveClick, items, onOrderClick, isLoading, totalPrice } = props;

  return (
    <>
      <div className={cn.cartItems}>
        {items.map((item) => (
          <div className={cn.cartItem} key={item.id}>
            <div className={cn.cartItemImg} style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className={cn.cartItemContent}>
              <p className={cn.cartItemTitle}>{item.title}</p>
              <b className={cn.cartItemPrice}>{item.price} руб.</b>
            </div>
            <img
              className={cn.cartItemRemove}
              src='img/button-remove.svg'
              alt='remove'
              onClick={() => onRemoveClick(item.id)}
            />
          </div>
        ))}
      </div>
      <div className={cn.drawerOrder}>
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>{totalPrice} руб. </b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>{Math.round((totalPrice / 100) * 5)} руб. </b>
          </li>
        </ul>
        <button className={cn.greenButton} onClick={onOrderClick} disabled={isLoading}>
          Оформить заказ <img src='img/arrow.svg' alt='arrow' />
        </button>
      </div>
    </>
  );
}

export default CartItems;
