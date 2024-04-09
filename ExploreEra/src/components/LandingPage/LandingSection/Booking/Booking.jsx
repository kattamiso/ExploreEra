import { CapitalCountryPairs, tourOffers, Persons } from "./DataStorage";
import { useState } from 'react';

export default function Booking() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full bg-[#E0E0E0] top-[400px] flex flex-col items-center justify-center">
      <h2 className="">Ready To Book A Trip?</h2>

      <div className="grid grid-cols-2 mt-4">
        <form className="w-[600px] h-[124px]">
          <div className="relative">
            <select
              id="countries"
              className="bg-gray-50 border h-16 border-gray-300 text-2xl rounded-lg pl-8 pr-12 w-full appearance-none"
              onClick={toggleDropdown}
            >
              <option disabled selected>Choose a country</option>
              {CapitalCountryPairs.map((pair, index) => (
                <option key={index} value={pair.country}>
                  {pair.capital}, {pair.country}
                </option>
              ))}
            </select>
            <svg
              className={`absolute right-0 top-0 h-6 w-6 mr-4 mt-4 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </form>

        <form className="w-[600px] h-[124px]">
          <div className="relative">
            <select
              id="countries"
              className="bg-gray-50 border h-16 border-gray-300 text-2xl rounded-lg pl-8 pr-12 w-full appearance-none"
              onClick={toggleDropdown}
            >
              <option disabled selected>Choose a tour offer</option>
              {tourOffers.map((offer, index) => (
                <option key={index} value={offer.price}>
                  {offer.price}, {offer.duration}
                </option>
              ))}
            </select>
            <svg
              className={`absolute right-0 top-0 h-6 w-6 mr-4 mt-4 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </form>

        <form className="w-[600px] h-[124px]">
          <div className="relative">
            <select
              id="countries"
              className="bg-gray-50 border h-16 border-gray-300 text-2xl rounded-lg pl-8 pr-12 w-full appearance-none"
              onClick={toggleDropdown}
            >
              <option disabled selected>Choose Date</option>
              {CapitalCountryPairs.map((pair, index) => (
                <option key={index} value={pair.country}>
                  {pair.capital}, {pair.country}
                </option>
              ))}
            </select>
            <svg
              className={`absolute right-0 top-0 h-6 w-6 mr-4 mt-4 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </form>

        <form className="w-[600px] h-[124px]">
          <div className="relative">
            <select
              id="countries"
              className="bg-gray-50 border h-16 border-gray-300 text-2xl rounded-lg pl-8 pr-12 w-full appearance-none"
              onClick={toggleDropdown}
            >
              <option disabled selected>Persons</option>
              {Persons.map((person, index) => (
                <option key={index} value={person.country}>
                  {person.persons}
                </option>
              ))}
            </select>
            <svg
              className={`absolute right-0 top-0 h-6 w-6 mr-4 mt-4 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </form>
      </div>

      <button className="px-6 py-3 w-[1200px] text-white text-2xl font-semibold rounded-lg shadow-md bg-[#FF4500] hover:bg-[#C85100] transition-colors duration-300">
        Book Now
      </button>    </div>
  );
}
