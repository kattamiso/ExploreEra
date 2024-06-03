import BackgroundImg from "../../../../public/Img/backgroundImg.png"


const HeroSection = () => {
  return (
    <div className="h-[800px]">
      <div className="absolute inset-0 ">

      <div className="absolute inset-0 h-[800px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>

        <img src={BackgroundImg} alt="background image" className="object-cover h-[800px] w-[430px] sm:w-full" />

     <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center text-white">
            <h2 className="text-4xl  font-semibold">Visit Mountains In <br /><span className="md:text-6xl space-x-2 tracking-wide">ITALY</span> </h2>
            <button className=" bg-[#FF6700] hover:bg-[#C85100] text-white text-2xl mt-8 rounded-2xl p-3 w-40">See offer</button>
          </div>
        </div>

       </div>
    </div>
  );
};

export default HeroSection;
