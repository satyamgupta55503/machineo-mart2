import machinesale from "../assets/machinesale.png";
import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs, FaSearchengin } from "react-icons/fa6";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";



const countryCodes = [
    

  { name: 'USA', code: '+1' },
  { name: 'Canada', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Australia', code: '+61' },
  { name: 'India', code: '+91' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Italy', code: '+39' },
  { name: 'Spain', code: '+34' },
  { name: 'Brazil', code: '+55' },
  { name: 'Japan', code: '+81' },
  { name: 'China', code: '+86' },
  { name: 'Mexico', code: '+52' },
  { name: 'South Africa', code: '+27' },
  { name: 'Russia', code: '+7' },
  { name: 'Netherlands', code: '+31' },
  { name: 'Sweden', code: '+46' },
  { name: 'Norway', code: '+47' },
  { name: 'New Zealand', code: '+64' },
  { name: 'Singapore', code: '+65' },
  { name: 'Saudi Arabia', code: '+966' },
  { name: 'Argentina', code: '+54' },
  { name: 'Chile', code: '+56' },
  { name: 'Colombia', code: '+57' },
  { name: 'Peru', code: '+51' },
  { name: 'Venezuela', code: '+58' },
  { name: 'Egypt', code: '+20' },
  { name: 'Turkey', code: '+90' },
  { name: 'Iran', code: '+98' },
  { name: 'Israel', code: '+972' },
  { name: 'Pakistan', code: '+92' },
  { name: 'Bangladesh', code: '+880' },
  { name: 'Philippines', code: '+63' },
  { name: 'Thailand', code: '+66' },
  { name: 'Malaysia', code: '+60' },
  { name: 'Vietnam', code: '+84' },
  { name: 'Indonesia', code: '+62' },
  { name: 'Ukraine', code: '+380' },
  { name: 'Romania', code: '+40' },
  { name: 'Greece', code: '+30' },
  { name: 'Portugal', code: '+351' },
  { name: 'Czech Republic', code: '+420' },
  { name: 'Hungary', code: '+36' },

  { name: 'Cayman Islands', code: '+1-345' },
  { name: 'Saint Kitts and Nevis', code: '+1-869' },
  { name: 'Saint Lucia', code: '+1-758' },
  { name: 'Saint Vincent and the Grenadines', code: '+1-784' },
  { name: 'Grenada', code: '+1-473' },
  { name: 'Dominica', code: '+1-767' },
  { name: 'Antigua and Barbuda', code: '+1-268' },
  { name: 'Barbados', code: '+1-246' },
  { name: 'Bermuda', code: '+1-441' },
  { name: 'British Virgin Islands', code: '+1-284' },
  { name: 'U.S. Virgin Islands', code: '+1-340' },
];

function MachineSale() {

  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  const [phone, setPhone] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Phone: ${selectedCode} ${phone}`);
    
};

  return (
    
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl p-8 gap-12">
          <div className="max-w-lg space-y-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white py-1 px-3 rounded-full font-bold text-sm">
                Ek click sahi deal
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 font-serif">
              1,55,500+ <span className="text-blue-700">New And Used</span>{" "}
              Machines For Sale
            </h1>

            {/* Search  */}


            <div className="mt-6">
              <p className="text-gray-800 text-lg mb-4">
                What would you like to find?
              </p>

              <div className="flex items-center bg-gray-100 rounded-md shadow-md overflow-hidden">
                <div className="flex items-center px-4 border-r border-gray-300 w-full">
                <MdOutlineSearch/>
                  <input
                    type="text"
                    placeholder="Search by Name Manufacture"
                    className="bg-transparent focus:outline-none py-2 w-full"
                  />
                </div>

                {/* Location*/}
                <div className="flex items-center px-4 border-r border-gray-300 w-full">
                  <span className="text-blue-600 mr-2">
                    
                    <FaLocationCrosshairs />
                  </span>
                  <select
                        id="country-code"
                        value={selectedCode}
                        onChange={(e) => setSelectedCode(e.target.value)}
                        className="p-2 border border-gray-300 rounded w-full hover:bg-slate-300"
                    >
                        {countryCodes.map(({ name, code }) => (
                            <option key={code} value={code}>
                                {name} ({code})
                            </option>
                        ))}
                    </select>
                </div>

                <button className="bg-yellow-500 text-white px-6 py-2 hover:bg-yellow-300">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-lg w-full">
            <img
              src={machinesale}
              alt="Machine"
              className="rounded-md shadow-md object-cover w-full"
            />
          </div>
        </div>
      </div>

  );
}

export default MachineSale;
