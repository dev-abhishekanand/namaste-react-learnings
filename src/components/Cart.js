import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryItemList from "./RestaurantCategoryItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" m-4 p-6 bg-gray-100 shadow-lg rounded-lg flex flex-col w-1/2 justify-center mx-auto">
      <div className="flex justify-between">
        <div className="font-bold text-2xl mb-6">Cart Page</div>
        <div
          className="hover:underline hover:cursor-pointer"
          onClick={handleClearCart}
        >
          clear cart
        </div>
      </div>

      <RestaurantCategoryItemList items={cartItems} />
      {cartItems.length === 0 && (
        <div className="text-center text-gray-500 mt-4">
          Your cart is empty. Please add items to the cart.
        </div>
      )}

      {/* <div className="bg-white p-4 rounded-lg shadow flex gap-4 items-center mb-4">
        <img
          src="https://source.unsplash.com/80x80/?food"
          alt="food"
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg">Paneer Tikka</h3>
          <p className="text-sm text-gray-500">
            Delicious spicy grilled paneer
          </p>
          <p className="font-medium mt-1">₹250 x 2</p>
        </div>
        <button className="text-red-500 font-semibold hover:underline">
          Remove
        </button>
      </div> */}
      {/* <div className="text-right font-bold text-lg mt-4">Total: ₹500</div> */}
    </div>
  );
};
export default Cart;
