import { useState } from 'react';



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
    { name: 'Switzerland', code: '+41' },
    { name: 'Belgium', code: '+32' },
    { name: 'Austria', code: '+43' },
    { name: 'Finland', code: '+358' },
    { name: 'Denmark', code: '+45' },
    { name: 'Ireland', code: '+353' },
    { name: 'Iceland', code: '+354' },
    { name: 'Slovakia', code: '+421' },
    { name: 'Slovenia', code: '+386' },
    { name: 'Bulgaria', code: '+359' },
    { name: 'Croatia', code: '+385' },
    { name: 'Serbia', code: '+381' },
    { name: 'Montenegro', code: '+382' },
    { name: 'Bosnia and Herzegovina', code: '+387' },
    { name: 'Macedonia', code: '+389' },
    { name: 'Albania', code: '+355' },
    { name: 'Lithuania', code: '+370' },
    { name: 'Latvia', code: '+371' },
    { name: 'Estonia', code: '+372' },
    { name: 'Georgia', code: '+995' },
    { name: 'Armenia', code: '+374' },
    { name: 'Azerbaijan', code: '+994' },
    { name: 'Kazakhstan', code: '+7' },
    { name: 'Kyrgyzstan', code: '+996' },
    { name: 'Tajikistan', code: '+992' },
    { name: 'Turkmenistan', code: '+993' },
    { name: 'Uzbekistan', code: '+998' },
    { name: 'Mongolia', code: '+976' },
    { name: 'Nepal', code: '+977' },
    { name: 'Sri Lanka', code: '+94' },
    { name: 'Maldives', code: '+960' },
    { name: 'Brunei', code: '+673' },
    { name: 'Cambodia', code: '+855' },
    { name: 'Laos', code: '+856' },
    { name: 'Myanmar', code: '+95' },
    { name: 'Timor-Leste', code: '+670' },
    { name: 'Fiji', code: '+679' },
    { name: 'Papua New Guinea', code: '+675' },
    { name: 'Solomon Islands', code: '+677' },
    { name: 'Vanuatu', code: '+678' },
    { name: 'Kiribati', code: '+686' },
    { name: 'Tuvalu', code: '+688' },
    { name: 'Samoa', code: '+685' },
    { name: 'Tonga', code: '+676' },
    { name: 'Micronesia', code: '+691' },
    { name: 'Marshall Islands', code: '+692' },
    { name: 'Palau', code: '+680' },
    { name: 'Nauru', code: '+674' },
    { name: 'Montserrat', code: '+1-664' },
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




const Login = () => {
    const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Phone: ${selectedCode} ${phone}`);
        
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-slate-300 p-6 rounded-md shadow-md  w-100 hover:bg-slate-400">
                <h2 className="mb-4 text-lg font-semibold">Login</h2>
                <div className="mb-4">
                    <label htmlFor="country-code" className="block mb-2">Country Code:</label>
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
                <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="p-2 border border-gray-300  rounded w-full hover:bg-slate-300"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
