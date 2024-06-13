import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CapitalCountryPairs } from "../../LandingPage/LandingSection/Booking/DataStorage";

const Flights = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between">
        <div className="w-[350px] flex justify-between py-3 px-5 h-[50px] border-2 border-orange-600 rounded-xl">
          From
          <select
            className="bg-gray-50  border h-8 border-gray-300 text-sm md:text-2xl rounded-lg pl-8 w-full appearance-none"
            onClick={() => toggleAccordion()}
          >
            <option disabled selected>+</option>
            {CapitalCountryPairs.map((pair, index) => (
              <option key={index} value={pair.country}>
                {pair.capital}, {pair.country}
              </option>
            ))}
          </select>
        </div>

        <div className="w-[350px] flex justify-between py-3 px-5 h-[50px] border-2 border-orange-600 rounded-xl">
          to
          <select
            className="bg-gray-50 border h-8 border-gray-300 text-sm md:text-2xl rounded-lg pl-8 pr-12 w-full appearance-none"
            onClick={() => toggleAccordion()}
          >
            <option disabled selected>+</option>
            {CapitalCountryPairs.map((pair, index) => (
              <option key={index} value={pair.country}>
                {pair.capital}, {pair.country}
              </option>
            ))}
          </select>
        </div>

        <div className="w-[350px] py-3 px-5 h-[50px] border-2 border-orange-600 rounded-xl">
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>

        <button className='px-8 rounded-xl text-white bg-orange-600 hover:bg-orange-700'>Search</button>
      </div>
    </div>
  );
}

export default Flights;
