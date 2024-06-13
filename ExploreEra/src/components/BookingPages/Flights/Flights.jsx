
const Flights = () => {
  return (
    <div className=" max-w-[1200px] mx-auto">


      <div className=" flex justify-between">
            <div className="w-[350px] flex justify-between py-3 px-5 h-[50px] border-2 border-orange-600 rounded-xl">
                From Tbilisi 
                <span>+</span>
            </div>
            <div className="w-[350px] flex justify-between py-3 px-5 h-[50px] border-2 border-orange-600 rounded-xl">
                to Paris
                <span>+</span>

            </div>
            <div className="w-[350px] py-3 px-5 h-[50px] border-2 border-orange-600 rounded-xl"> 
              Calendar
            </div> 
          
              <button>Search</button>

      </div>

    </div>
  )
}

export default Flights