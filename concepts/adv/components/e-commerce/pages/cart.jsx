import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartTile from "../components/cart-tile.jsx";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + Number(curr.price) || 0, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div>
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-2">
              {cart.map((cartItem, index) => (
                <CartTile cartItem={cartItem} key={index} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg">Your Cart Summary</h1>
              <p>
                <span className="text-gray-800 font-bold">Total Items</span>
                <span className="text-gray-800 font-bold">: {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount</span>
                <span className="text-gray-800 font-bold">: {cart.length}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h4 className="text-xl pb-6">Your cart is empty</h4>
          <Link to={"/"}>
            <button className="bg-blue-500 text-white border-2 rounded-lg p-2 cursor-pointer">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
