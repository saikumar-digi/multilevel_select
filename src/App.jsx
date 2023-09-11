import React, { useState } from 'react'

const App = () => {

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countries = [
    {
      name: "India",
      value: "IN",
      cities: [
        'Delhi',
        'Kanpur'
      ]
    },

    {
      name: "Pakistan",
      value: "PK",
      cities: [
        'Lahore',
        'Hyderabad'
      ]
    },
    {
      name: "UAE",
      value: "UAE",
      cities: [
        'Dubai',
        'Abu Dhabi'
      ]
    },
  ]


  const handleCountryChange = (e) => {
    console.log(e.target.value);
    setSelectedCountry(e.target.value);
  }

  const handleCityChange = (e) => {
    console.log(e.target.value);
    setSelectedCity(e.target.value);
  }


  return (
    <div>
      <p>Select Country</p>
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">slect Country</option>
        {
          countries.map((item, index) => (
            <option key={index} value={item.value}>{item.name}</option>
          ))
        }
      </select>

      {
        selectedCountry && (

          <div>
            <p>Select City</p>
            <select
              value={selectedCity}
              onChange={handleCityChange}
            >
              <option value="">Select City</option>
              {
                countries.find((country) => country.value === selectedCountry)?.cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))
              }
            </select>
          </div>
        )

      }
    </div>
  )
}

export default App
