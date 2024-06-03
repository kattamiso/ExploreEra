import { FooterIcons, Links } from "./FooterData"; 
import Vector from "../../../public/Img/Vector.png"
const Footer = () => {
  return (
    <div className="relative bottom-0 md:top-[400px] w-full h-[850px] md:h-[400px] bg-gray-200 p-12 flex flex-col md:flex-row justify-around">
    
     <div className="flex flex-col gap-8" >
      <h3 className="text-4xl font-kalnia text-black">ExploreEra</h3>
      <h3 className="font-normal text-xl w-[300px] ">Travel agency which helps you to plan your perfect holidays</h3>
      <h3 className="text-2xl font-normal">Follow us</h3>

    <div className="w-[50px] h-[50px] flex  gap-2">
      {FooterIcons.map((data, index) => (
        <img key={index} src={data.Icon} alt={`icon-${index}`} /> 
      ))}
    </div>
    </div>
     
    <div>
        <h3 className="font-normal text-2xl">Links</h3>
        <div className="mt-5 flex flex-col gap-3">
      {Links.map((data, index) => (
        <h3 key={index}>{data.title}</h3> 
      ))}
    </div>
    </div>

    <div className="flex flex-col gap-3">
        <h3 className="font-normal text-2xl">Contact us</h3>
 
        <h2>exploreera@gmail.com</h2>
        <h2>555111222</h2>
       
       <h2>Subscribe news</h2>
       <div className="flex justify-between  border border-gray-400 rounded-md p-2">
        <h3>Email</h3>
        <img src={Vector}/>
       </div>
    </div>  

  

  </div>
     
  );
};

export default Footer;
