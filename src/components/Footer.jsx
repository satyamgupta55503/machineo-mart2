import { Link } from "react-router-dom";

import machineolast from "../assets/footerlast/machineolast.png";
import facebook from "../assets/footerlast/facebook.png";
import instagram from "../assets/footerlast/instagram.png";
import linkedin from "../assets/footerlast/linkedin.png";

function Footer() {
  return (
    <footer className="bg-[#222222] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={machineolast} alt="Machineo Mart logo" className="h-10 w-auto" />
          </div>
          <p className="text-gray-400 mt-4">
            We are on a mission to redefine the machinery buying and selling experience. With our
            cutting-edge platform, we aim to facilitate seamless transactions and empower businesses worldwide.
          </p>

          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="w-12 h-12 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center">
                <img src={facebook} alt="Facebook icon" className="w-6 h-6" />
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="w-12 h-12 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center">
                <img src={instagram} alt="Instagram icon" className="w-6 h-6" />
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="w-12 h-12 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center">
                <img src={linkedin} alt="LinkedIn icon" className="w-6 h-6" />
              </div>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Sell or Buy</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Sell Used & New Machinery</a></li>
            <li><a href="#">Post Buy Requirement</a></li>
            <li><a href="#">How it works</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Help & Support</a></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500">
        ©2024 Copyright Machineo Mart
      </div>
    </footer>
  );
}

export default Footer;
