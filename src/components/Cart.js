import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" text-center ">
      <h1 className="m-2 p-4 font-bold">Cart</h1>
      <button onClick={() => clear()} className="rounded-md bg-slate-200 p-2">
        Clear
      </button>
      {cartItems.length != 0 ? (
        <div className="w-6/12 m-auto my-3 p-4 shadow-lg bg-slate-50">
          <ItemList items={cartItems}></ItemList>
        </div>
      ) : (
        <div className="w-6/12 m-auto my-3 p-4 shadow-lg rounded-lg bg-red-400">
          No items added
        </div>
      )}
    </div>
  );
};
export default Cart;
