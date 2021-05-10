import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const items = [];

  console.log("cartItems", cartItems);
  cartItems.forEach((cartItem) => {
    items.push(
      <CartItem
        id={cartItem.id}
        item={{
          id: cartItem.id,
          title: cartItem.title,
          quantity: cartItem.quantity,
          total: cartItem.total,
          price: cartItem.price,
        }}
      />
    );
  });

  console.log(items);
  return (
    <Card className={classes.cart}>
      <h2>
        Your Shopping Cart {cartItems.length <= 0 && <span>is empty</span>}
      </h2>
      <ul>{items}</ul>
    </Card>
  );
};

export default Cart;
