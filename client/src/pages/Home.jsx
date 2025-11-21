import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/productsapi").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  });

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

      {products.map((product) => {
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>
            <b>{product.price}</b>
          </p>
          <button>Add To Cart</button>
        </div>;
      })}
    </>
  );
}

export default Home;
