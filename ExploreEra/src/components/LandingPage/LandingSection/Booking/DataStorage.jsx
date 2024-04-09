export const CapitalCountryPairs = [
    { capital: 'Washington, D.C.', country: 'USA' },
    { capital: 'London', country: 'UK' },
    { capital: 'Paris', country: 'France' },
    { capital: 'Berlin', country: 'Germany' },
    { capital: 'Rome', country: 'Italy' },
    { capital: 'Madrid', country: 'Spain' },
    { capital: 'Tokyo', country: 'Japan' },
    { capital: 'Beijing', country: 'China' },
    { capital: 'Moscow', country: 'Russia' },
    { capital: 'New Delhi', country: 'India' },
    { capital: 'Ottawa', country: 'Canada' },
    { capital: 'Brasília', country: 'Brazil' },
    { capital: 'Canberra', country: 'Australia' },
    { capital: 'Mexico City', country: 'Mexico' },
    { capital: 'Buenos Aires', country: 'Argentina' },
    { capital: 'Cairo', country: 'Egypt' },
    { capital: 'Stockholm', country: 'Sweden' },
    { capital: 'Athens', country: 'Greece' },
    { capital: 'Ankara', country: 'Turkey' },
    { capital: 'Seoul', country: 'South Korea' },
    { capital: 'Bangkok', country: 'Thailand' },
    { capital: 'Oslo', country: 'Norway' },
    { capital: 'Helsinki', country: 'Finland' },
    { capital: 'Vienna', country: 'Austria' },
    { capital: 'Dublin', country: 'Ireland' },
    { capital: 'Lisbon', country: 'Portugal' },
    { capital: 'Amsterdam', country: 'Netherlands' },
    { capital: 'Brussels', country: 'Belgium' },
    { capital: 'Bern', country: 'Switzerland' },
    { capital: 'Prague', country: 'Czech Republic' },
    { capital: 'Warsaw', country: 'Poland' },
    { capital: 'Budapest', country: 'Hungary' },
    { capital: 'Copenhagen', country: 'Denmark' },
    { capital: 'Hanoi', country: 'Vietnam' },
    { capital: 'Manila', country: 'Philippines' },

]

export const tourOffers = [
    { price: '$1500', duration: '5 days' },
    { price: '$1200', duration: '7 days' },
    { price: '$2000', duration: '6 days' },
    { price: '$1800', duration: '4 days' },
    { price: '$2500', duration: '8 days' },
    { price: '$2200', duration: '7 days' },
    { price: '$1700', duration: '5 days' },
    { price: '$1900', duration: '6 days' },
    { price: '$3000', duration: '10 days' },
    { price: '$2800', duration: '7 days' }
  ];


  export const Persons = [];
  for (let i = 1; i <= 15; i++) {
    Persons.push({ persons: `${i} person${i !== 1 ? 's' : ''}` });
  }
  

  export default { CapitalCountryPairs, tourOffers, Persons }