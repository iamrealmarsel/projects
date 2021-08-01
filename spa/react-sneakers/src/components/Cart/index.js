import cn from "./Cart.module.scss";

function Cart(props) {
  const { title, description, image } = props;

  return (
    <div className={cn.cart}>
      <img className={cn.image} src={image} alt="" />
      <p className={cn.title}>{title}</p>
      <span className={cn.text}>{description}</span>
    </div>
  );
}

export default Cart;
