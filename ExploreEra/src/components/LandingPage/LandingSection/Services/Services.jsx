
import ServicesData from "./ServicesData"

const Services = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-12">
        <h2 className="text-[40px] font-medium">Discover Our Services</h2>
        <p className='w-[1200px] font-normal pt-6 text-lg'>ExploreEra provides a one-stop solution for individuals seeking well-planned journeys. These services include expert advice on destination selection, flight and accommodation bookings, and customized itineraries to individual preferences.
        </p>

        <div className="flex pt-10 gap-5">
            {ServicesData.map((data, key) => (
                <div key={key}>
                    <img src={data.img} alt={data.title} className="w-[300px] h-[220px]" />
                    <h2 className="font-medium text-3xl pt-4 w-[300px]">{data.title}</h2>
                    <p className="pt-5 h-[63px] font-medium text-[#252525CC]">{data.text}</p>
                </div>
            ))}
        </div>
    
    </div>
  )
}

export default Services