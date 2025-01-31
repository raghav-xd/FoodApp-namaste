import { useSelector } from "react-redux";
import Accordianlist from "./Accordianlist";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);
  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Cart</h1>
        <Accordianlist dataa={cartItems}></Accordianlist>
      </div>
    </div>
  );
};

export default Cart;
