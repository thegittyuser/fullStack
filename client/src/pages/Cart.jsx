import { useEffect } from "react";
import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    await fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
      });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Cart Items</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center bg-white p-4 rounded-lg shadow">
              <img src="#" className="w-24 h-24 rounded object-cover" />

              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">name</h2>
                <p className="text-gray-500">price</p>

                <div className="flex items-center mt-2">
                  <button className="px-3 py-1 border rounded-l hover:bg-gray-200">
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">quantity</span>
                  <button className="px-3 py-1 border rounded-r hover:bg-gray-200">
                    +
                  </button>
                </div>
              </div>

              <button className="text-red-500 hover:text-red-700 font-medium">
                Remove
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>33</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>10</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>43</span>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
