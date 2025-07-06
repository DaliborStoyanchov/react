import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    console.log("Removed");
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      <div className="flex flex-col items-center p-5 justify-between mb-2 mt-2 border-1 rounded w-120">
        <div className="flex p-3">
          <img src={cartItem?.image} alt={cartItem?.title} className="h-28" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-l">{cartItem?.title}</h1>
            <p className="font-bold">${cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white border-2 rounded-lg p-2 cursor-pointer w-40"
            onClick={handleRemoveFromCart}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTile;
