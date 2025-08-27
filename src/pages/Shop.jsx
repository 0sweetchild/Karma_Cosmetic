import React from 'react';

function Shop() {
  const products = [
    {
      name: 'Hydrating Face Cream',
      price: 2500,
      image: 'https://cdn.cosmos.so/2fc94712-3dec-4a11-a8f0-4bf962b4e21f?format=jpeg'
    },
    {
      name: 'Vitamin C Serum',
      price: 1800,
      image: 'https://cdn.cosmos.so/bf9543e6-fefe-420a-b2b0-8bd1727850bb?format=jpeg'
    },
    {
      name: 'Glow Face Mask',
      price: 1500,
      image: 'https://cdn.cosmos.so/b1427e0d-139f-4753-8e68-70774e42e022?format=jpeg'
    },
    {
      name: 'Aloe Vera Gel',
      price: 1200,
      image: 'https://cdn.cosmos.so/cce51f3a-ed88-44f6-9008-c8c6167c7373?format=jpeg'
    },
    {
      name: 'Sunscreen SPF 50',
      price: 2000,
      image: 'https://cdn.cosmos.so/2e597455-dbcb-4484-87d9-88f0c3776a19?format=jpeg'
    },
    {
      name: 'Lip Balm Natural',
      price: 800,
      image: 'https://cdn.cosmos.so/dc60487f-51ee-4d30-91b8-d22f10633dfb?format=jpeg'
    }
  ];

  return (
    <div className="flex flex-col p-10">
      <span className="mt-20 text-2xl font-bold">Best Sellers</span>
      <hr className="my-4" />

      <div className="flex flex-wrap gap-10">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <img src={product.image} alt={product.name} className="w-40 h-40 rounded-2xl object-cover" />
            <span className="font-bold mt-2">{product.name}</span>
            <span className="text-gray-700">Rs{product.price}</span>
            <button className="border-2 mt-2 h-10 w-24 rounded-full hover:bg-black hover:text-white transition">
              Shop
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
