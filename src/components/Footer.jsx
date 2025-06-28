
const Footer = () => {
  return (
    <footer className="text-gray-300 bg-gray-800">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Company</h2>
            <ul>
              <li className="mb-2"><a href="/home" className="hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="/home" className="hover:text-white">Careers</a></li>
              <li className="mb-2"><a href="/home" className="hover:text-white">Press</a></li>
              <li className="mb-2"><a href="/home" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold">Help & Support</h2>
            <ul>
              <li className="mb-2"><a href="/home" className="hover:text-white">FAQs</a></li>
              <li className="mb-2"><a href="/home" className="hover:text-white">Terms & Conditions</a></li>
              <li className="mb-2"><a href="/home" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold">Follow Us</h2>
            <ul>
              <li className="mb-2"><a href="/home" className="hover:text-white">Facebook</a></li>
              <li className="mb-2"><a href="/home" className="hover:text-white">Twitter</a></li>
              <li className="mb-2"><a href="/home" className="hover:text-white">Instagram</a></li>
              <li className="mb-2"><a href="/home" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
