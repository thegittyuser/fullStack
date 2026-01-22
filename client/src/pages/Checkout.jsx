import { useState } from "react";

function Checkout() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT SIDE — FORM */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              name="firstName"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              name="lastName"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              name="email"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone No</label>
            <input
              type="tel"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              name="phone"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Street Address
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              name="address"
              onChange={(e) => setForm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                name="city"
                onChange={(e) => setForm(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Post Code
              </label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                name="postalCode"
                onChange={(e) => setForm(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <label className="flex items-center gap-2 border p-3 rounded cursor-pointer">
              <input type="radio" defaultChecked />
              <span>Cash on Delivery (COD)</span>
            </label>
          </div>

          <button className="w-full mt-6 bg-black text-white py-3 rounded hover:bg-gray-800 transition">
            Place Order
          </button>
        </form>
      </div>

      {/* RIGHT SIDE — PRODUCTS */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Your Order</h3>

        <div className="flex gap-4 items-center mb-4">
          <img
            src=""
            alt=""
            className="w-20 h-20 bg-gray-100 rounded object-cover"
          />
          <div className="text-sm">
            <p className="font-medium">title</p>
            <p className="text-gray-500">Qty:</p>
            <p className="font-semibold">Rs</p>
          </div>
        </div>

        <hr className="my-4" />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Rs</span>
          </div>

          <div className="flex justify-between font-semibold text-lg pt-2 border-t">
            <span>Total</span>
            <span>Rs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
