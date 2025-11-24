import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) =>
        console.error("Error while fetching data from API: " + err)
      );
  }, []);

  return (
    <>
      <section className="w-full h-auto bg-amber-200 flex justify-center items-center flex-col py-16 px-5">
        <h2 className="text-3xl font-semibold mb-4">Lorem Ipsum</h2>
        <p className="text-center text-2xl mb-6 w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          voluptates autem? Amet, aut perspiciatis aliquid tenetur, sint
          voluptas, ab corrupti nihil veniam expedita consectetur itaque. Culpa
          blanditiis cum voluptas asperiores quae impedit incidunt commodi porro
          illo, pariatur distinctio minima. Non id perferendis officiis itaque
          tempore, similique quis cupiditate repellendus odio.
        </p>
        <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Shop Now
        </button>
      </section>

      <div className="w-full px-6 py-10 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Products
        </h2>

        {/* FLEX CONTAINER */}
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-64 bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-md mb-4"
              />

              <h2 className="text-lg font-semibold mb-2 text-center">
                {product.title}
              </h2>

              <p className="text-gray-700 mb-3">
                <b>{product.price}</b>
              </p>

              <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
