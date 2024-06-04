import Navbar from "../Header/Navbar"
import HeroSection from "./LandingSection/HeroSection"
import Services from "../LandingPage/LandingSection/Services/Services.jsx";
import Trips from "../LandingPage/LandingSection/Trips.jsx"
import Swiper from "../LandingPage/LandingSection/Swiper/Swiper.jsx"
import Blogs from "../LandingPage/LandingSection/Blogs/Blogs.jsx"
import Booking from "../LandingPage/LandingSection/Booking/Booking.jsx"
import Footer from "../Footer/Footer"

const LandingPage = () => {
  return (
    <div className="w-full">
     <Navbar />
     <HeroSection />
     <Services/>
      <Trips/>
      <Swiper/>
      <Blogs/>
      <Booking/>
      <div className="relative md:top-[400px] bg-white w-full h-[100px] ">

      </div>
     <Footer/>
    </div>
  )
}

export default LandingPage