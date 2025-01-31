import { useSelector } from "react-redux";
import Accordianlist from "./Accordianlist";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);
  const dispatch=useDispatch();
  const handleClick=()=>{
    dispatch(clearCart());

  }
  return (
    <div className="cart-page">
    <h1 className="cart-heading">Cart</h1>
    <button onClick={handleClick}> Clear cart</button>
      <div className="cart-container">
        <Accordianlist dataa={cartItems}></Accordianlist>
      </div>
    </div>
  );
};

export default Cart;
