import bg from '../components/home-bg.png'; 
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      className="relative flex items-center justify-center w-full h-screen text-white bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 max-w-2xl px-6 text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
          Welcome to Our Car Rental Platform
        </h1>
        <p className="mb-6 text-lg text-gray-200">
          Explore premium vehicles, top locations, and start your next ride with ease.
        </p>
        <Link
          to="/products"
          className="inline-block px-6 py-3 text-lg font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Browse Vehicles
        </Link>
      </div>
    </div>
  );
}