import React from 'react';
import item1 from '../components/item1.jpg'
import item2 from '../components/item2.jpg'
import item3 from '../components/item3.jpg'
import item4 from '../components/item4.jpg'
import item5 from '../components/item5.jpg'
import item6 from '../components/item6.jpg'

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="ml-20  rounded overflow-hidden shadow-lg">
        <img className="w-50 h-50" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">₹{price}</p>
          </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
    </div>
  );
};

const MainPage = () => {
  const products = [
    {
      id: 1,
      title: 'Car',
      price: 99.99,
      image: item1,
    },
    {
      id: 2,
      title: 'Bike',
      price: 129.99,
      image: item2,
    },
    {
        id: 3,
        title: 'Microwave',
        price: 129.99,
        image: item3,
      },
      {
        id: 4,
        title: 'Laptop',
        price: 129.99,
        image: item4,
      },
      {
        id: 5,
        title: 'Books',
        price: 129.99,
        image: item5,
      },
      {
        id: 6,
        title: 'Novel',
        price: 129.99,
        image: item6,
      },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default MainPage;
