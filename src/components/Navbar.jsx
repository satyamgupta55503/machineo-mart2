import machineomart from "../assets/machineomart.png";
import { Link } from "react-router-dom";




const Navbar = () => {

 
  return (
    <nav className="bg-white  shadow-md font-serif">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <img src={machineomart} alt="Machineo Mart Logo" className="h-10" />
        </div>

        <ul className="hidden  md:flex space-x-6 text-gray-700">
          <li className="hover:text-blue-700 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-700 cursor-pointer"><Link to="/allcategories">All Categories</Link></li>
          <li className="hover:text-blue-700 cursor-pointer"><Link to="/about">About Us</Link></li>
          <li className="relative group">
            <li className="hover:text-blue-700 cursor-pointer">
            <Link to="/buyerrequirements">Buyer Requirements</Link></li>
           
          </li>
        </ul>

        <div className="space-x-4 flex items-center">
          <button className="border border-blue-900  text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50">
          <Link to="/login">Login</Link>
          </button>
          <button className="bg-yellow-400  text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-200">
            SELL
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
