import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from "./components/nevbarcomponant/AboutUs"; 
import ContactUs from "./components/nevbarcomponant/ContactUs";

import Navbar from "./components/Navbar";

import Machinsale from "./components/Machinesale";
import Featureproduct from "./components/Featureproduct";
import BrowseItems from "./components/BrowseItems";
import Latestlisting from "./components/Latestlisting";
import Offer from "./components/Offer";
import Statistic from "./components/Statistic";
import Footer from "./components/Footer";
import AllCategory from './components/nevbarcomponant/AllCategory'; 
import Login from './components/nevbarcomponant/Login'; 
import Blog from "./components/Blog";


import BuyerRequirements from "./components/nevbarcomponant/BuyerRequirements";
import PrivacyPolicy from "./components/PrivacyPolicy"


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Machinsale />
              <Featureproduct />
              <BrowseItems />
              <Latestlisting />
              <Offer />
              <Statistic />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/allcategories" element={<AllCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/buyerrequirements' element={<BuyerRequirements/>}/>
          <Route path='/privacypolicy'  element={<PrivacyPolicy/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;