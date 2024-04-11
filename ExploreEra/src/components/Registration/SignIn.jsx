import Header from "./Header";
import Facebook from "../../../public/Img/fbcolor.png"
import Google from "../../../public/Img/googlecolor.png"
import Apple from "../../../public/Img/applecolor.png"
import Mail from "../../../public/Img/mailcolor.png"
import Footer from "../../components/LandingPage/Footer/Footer"


const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className=" flex flex-col justify-center items-center bg-[#F6F6F6]" >
       <Header/>
      <form onSubmit={handleSubmit} className=" relative flex flex-col items-center justify-center mt-[150px] w-[500px] h-[500px] bg-white ">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="border border-orange-500 rounded px-4 p-2 w-[400px]" required  placeholder="Enter your email address"/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" name="password" className="border border-orange-500 rounded px-4 p-2 w-[400px]" required placeholder="Enter your password"/>
        </div>
        <button type="submit" className="text-white bg-orange-500 px-4 py-2 rounded w-[400px] hover:bg-orange-600">Continue</button>
         
        <div className="my-5 flex flex-col items-center">
  <div className="relative w-[400px]">
    <hr className="border-t border-gray-400" />
    <span className="absolute text-gray-400 bg-white px-4 py-2 rounded-2xl -translate-y-1/2 left-1/2 -translate-x-1/2">
      or continue with
    </span>
  </div>

  <div className="mt-10 flex flex-row w-[400px] gap-10">
    <img className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer" src={Facebook}/>
    <img src={Apple} className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer"/>
    <img src={Google} className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer"/>
    <img src={Mail} className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer"/>    
  </div>
</div>

  <div className="relative w-[400px]">
    <hr className="border-t border-gray-400" />
    <p>By signing in or creating an account, you agree with our <span className="ml-12">Terms & conditions</span> and <span>Privacy policy</span></p>
  </div>
        </form>
   <Footer/>
    </div>
  );
};

export default SignIn;
