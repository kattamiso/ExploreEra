
import ServicesData from "./ServicesData"

const Services = () => {
  return (
    <div className="md:w-[950px] w-[340px] lg:w-[1200px] mx-20 lg:mx-auto">
    <div className="flex flex-col sm:items-left md:i-center ">
        <h2 className="md:text-[40px] text-[30px] font-medium py-8">Discover Our Services</h2>
        <p className='lg:w-[1200px] h-[80px] w-[450px] md:w-[800px] font-normal text-xl mb-10 lg:mb-0 '>
          ExploreEra provides a one-stop solution for individuals seeking well-planned journeys. These services include expert advice on destination selection, flight and accommodation bookings, and customized itineraries to individual preferences.
        </p>

        <div className="grid grid-1 md:pt-0 lg:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ServicesData.map((data, key) => (
                <div key={key}>
                    <img src={data.img} alt={data.title} className=" w-[300px] md:w-[280px] h-[220px] my-[70px] ml-4 md:ml-0 mb-8" />
                    <h2 className="font-medium text-2xl pl-5 md:text-3xl w-[300px]">{data.title}</h2>
                    <p className="pt-4 h-[63px] sm:w-[300px] font-medium pl-4 text-[#252525CC]">{data.text}</p>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Services