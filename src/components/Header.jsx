import rental from './rental.png';
import user from './user.png';

const navigation = [
  { name: 'Home', key: 'Home' },
  { name: 'Location', key: 'Location' },
  { name: 'Products', key: 'Products' },
  { name: 'Rent', key: 'Rent' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="w-full bg-gray-800">
      <div className="relative flex items-center justify-between h-16 px-4">
        <div className="flex items-center flex-1">
          <img className="w-auto px-5 h-14" src={rental} alt="Rental" />
          <div className="flex items-center space-x-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => setCurrentPage(item.key)}
                className={classNames(
                  currentPage === item.key
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-md font-medium'
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="block py-2 pl-10 pr-4 text-white placeholder-gray-400 bg-gray-700 border border-transparent rounded-md w-60 focus:outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
            placeholder="Search"
          />
          <img className="w-10 h-10 rounded-full" src={user} alt="User" />
        </div>
      </div>
    </div>
  );
}
