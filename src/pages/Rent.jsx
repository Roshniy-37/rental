import { useCart } from '../components/CartContext';

export default function Rent() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h2 className="mb-6 text-3xl font-bold text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {cartItems.map(item => (
              <div key={item.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                <img className="object-cover w-full h-48" src={item.image} alt={item.title} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-700">₹{item.price}</p>
                  <p className="mt-2 text-sm text-gray-500">Quantity: {item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-1 mt-3 text-sm font-bold text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800">Total: ₹{total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}
