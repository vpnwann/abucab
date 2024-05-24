// components/LocationForm.js
import React, { useState } from 'react';

const locations = [
  "Achalgarh",
  "Akhi",
  "Amba",
  "Ambaweri",
  "Amthala",
  "Andaliya",
  "Arna",
  "Awal",
  "Bageri",
  "Bahadurpura",
  "Bhaisasingh",
  "Bhakyorji",
  "Bhamriya",
  "Block No 1",
  "Block No 3",
  "Bori Booj",
  "Bosa",
  "Buja",
  "Chanar",
  "Chandela",
  "Chandrawati",
  "Chotila",
  "Deldar",
  "Deri",
  "Derna",
  "Dhamsara",
  "Doytra",
  "Duna Kakar",
  "Fatehpura",
  "Forest Chotila",
  "Ganka",
  "Girwar",
  "Jamboori",
  "Jawai",
  "Jaydara",
  "Jhamar",
  "Karoli",
  "Khadat",
  "Khara",
  "Kiwarli",
  "Kui",
  "Kyara",
  "Kyari",
  "Kyariya",
  "Mahi Khera",
  "Manpur",
  "Matadevi",
  "Maval",
  "Meen",
  "Meergarh",
  "Mordu",
  "Morthala",
  "Mudrala",
  "Mulia Mahadeo",
  "Mungthala",
  "Nichla Khejra",
  "Nichlagarh",
  "Nichli Bor",
  "Or",
  "Oriya",
  "Paba",
  "Pandoori",
  "Rada",
  "Ranora",
  "Redwa Kalan",
  "Redwa Khurd",
  "Sakoda",
  "Salgaon",
  "Sangna",
  "Santpur",
  "Shergaon",
  "Siyawa",
  "Soorpagla",
  "Taleti",
  "Talwaron Ka Naka",
  "Tankiya",
  "Tartoli",
  "Toonka",
  "Umarni",
  "Upala Derna",
  "Upala Tankiya",
  "Upla Khejra",
  "Uplagarh",
  "Uplibor",
  "Utraj",
  "Wasda"
];

const availableRidesMock = [
  { id: 1, from: "Achalgarh", to: "Oriya", distance: "12 km" },
  { id: 2, from: "Akhi", to: "Oriya", distance: "22 km" },
  { id: 3, from: "Amba", to: "Bhaisasingh", distance: "14 km" },
  { id: 4, from: "Ambaweri", to: "Chandela", distance: "18 km" },
  { id: 5, from: "Amthala", to: "Amthala", distance: "10 km" },
  { id: 6, from: "Andaliya", to: "Awal", distance: "12 km" },
  { id: 7, from: "Arna", to: "Oriya", distance: "3 km" },
  { id: 8, from: "Awal", to: "Awal", distance: "12 km" },
  { id: 9, from: "Bageri", to: "Dhamsara", distance: "15 km" },
  { id: 10, from: "Bahadurpura", to: "Bahadur Pura", distance: "22 km" },
  // Add the rest of the rides here...
];
const handleLogoClick = () => {
    // Data to store
    const data = {
      
      Car: 'Mercedes'
    };

    // Convert data to JSON and store it in localStorage
    localStorage.setItem('Car', JSON.stringify(data));
    

    // Alert to confirm data storage (you can remove this line)

  };


const LocationForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [availableRides, setAvailableRides] = useState([]);
  const [toSelected, setToSelected] = useState(false);

  const handleInputChange = (e, setLocation, setSuggestions, isTo) => {
    const value = e.target.value;
    setLocation(value);

    if (value.length > 0) {
      const filteredSuggestions = locations.filter(location =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }

    if (isTo) {
      setToSelected(true);
    }
  };

  const handleSuggestionClick = (suggestion, setLocation, setSuggestions, ) => {
    setLocation(suggestion);
    setSuggestions([]);
    if (setLocation === setTo) {
      setToSelected(true);
    }
  };

  const searchRides = () => {
    const rides = availableRidesMock.filter(ride => ride.from === from && ride.to === to);
    setAvailableRides(rides);
    localStorage.setItem('selectedLocations', JSON.stringify({ from, to, }));
    
  };
  

  return (
    <div className="container">
      <form id="locationForm" onSubmit={(e) => { e.preventDefault(); searchRides(); }}>
        
        
        <label htmlFor="from">From:</label><br/>
        
        <input
        class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none text-black mb-4"
          type="text"
          id="from"
          placeholder='Enter Pickup Location'
          name="from"
          value={from}
          onChange={(e) => handleInputChange(e, setFrom, setFromSuggestions, false)}
          autoComplete="off"
          disabled={toSelected}
        />
        {!toSelected && fromSuggestions.length > 0 && (
          <div className="suggestions-box">
            {fromSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion"
                onClick={() => handleSuggestionClick(suggestion, setFrom, setFromSuggestions)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
        <br />
        <label htmlFor="to">To:</label><br/>
        <input
        className='mt-4 h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none text-black mb-4'
        placeholder='Search For Locality'
          type="text"
          id="to"
          name="to"
          value={to}
          onChange={(e) => handleInputChange(e, setTo, setToSuggestions, true)}
          autoComplete="off"
        />
        {toSuggestions.length > 0 && (
          <div className="suggestions-box">
            {toSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion"
                onClick={() => handleSuggestionClick(suggestion, setTo, setToSuggestions)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
        <br />
        <button class="
        mt-8
        group
        p-5
        cursor-pointer 
        relative  
        text-xl 
        font-normal 
        border-0 
        flex 
        items-center 
        justify-center
        bg-transparent
         text-red-500 
         h-auto  
         w-[170px]  
         overflow-hidden   
         transition-all
         duration-100">
        <span class="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
        border-l
         border-red-500
           transition-all
         duration-500">
        </span>

        <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200">Book Now</p>

        <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Let's Go
        </span>

        <span
            class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-red-500 transition-all duration-500">
        </span>
    </button>
      </form>
      <div className="rides">
        {availableRides.length > 0 ? (
          <span>

<img src="https://icons8.com/icon/12684/car" alt="Logo" />
          </span>
        ) : (
          from && to &&  <span onClick={handleLogoClick}>
            <h1>Select Ride</h1>

          <img  className='h-12 w-20 inline-block'  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ZnTT-ac2kKqV6BoR4xwrFQHaEA%26pid%3DApi&f=1&ipt=4860dc9fa214c9befaf3b8fbd0fab52135f00c471bb72861ce45b50380da2e04&ipo=images" alt="Logo" />
                 MercedesBenz
                 
                    </span>
        )}
      </div>
      <style jsx>{`
        .container {
            
          
          
        }
        .suggestions-box {
          border: 1px solid #ccc;
          max-height: 150px;
          overflow-y: auto;
        }
        .suggestion {
          padding: 10px;
          cursor: pointer;
        }
        .suggestion:hover {
          background-color: #f0f0f0;
        }
        .rides {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default LocationForm;
