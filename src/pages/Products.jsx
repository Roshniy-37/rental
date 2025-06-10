import { useCart } from '../components/CartContext'; 
import item1 from '../components/item1.jpg';
import item2 from '../components/item2.jpg';
import item3 from '../components/item3.jpg';
import item4 from '../components/item4.jpg';
import item5 from '../components/item5.jpg';
import item6 from '../components/item6.jpg';

const ProductCard = ({ image, title, price, onAdd, quantity }) => (
  <div className="justify-center overflow-hidden bg-white rounded shadow-lg">
    <img className="object-cover w-full h-60 rounded-t-md" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold">{title}</div>
      <p className="text-base text-gray-700">₹{price}</p>
      {quantity > 0 && (
        <p className="mt-1 text-sm text-green-600">In Cart: {quantity}</p>
      )}
    </div>
    <div className="px-6 py-4">
      <button
        onClick={onAdd}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  </div>
);

const Products = () => {
  const { addToCart, cartItems } = useCart();

  const products = [
    { id: 1, title: 'Car', price: 99.99, image: item1 },
    { id: 2, title: 'Bike', price: 129.99, image: item2 },
    { id: 3, title: 'Microwave', price: 129.99, image: item3 },
    { id: 4, title: 'Laptop', price: 129.99, image: item4 },
    { id: 5, title: 'Books', price: 129.99, image: item5 },
    { id: 6, title: 'Novel', price: 129.99, image: item6 },
  ];

  const getQuantity = (id) => {
    const item = cartItems.find(p => p.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          quantity={getQuantity(product.id)}
          onAdd={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default Products;
