import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Press</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Help & Support</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white">FAQs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Twitter</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Instagram</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">LinkedIn</a></li>
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
