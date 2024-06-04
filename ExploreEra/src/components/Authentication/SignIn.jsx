import Header from "./Header";
import { useState } from "react";
import Facebook from "../../../public/Img/fbcolor.png";
import Google from "../../../public/Img/googlecolor.png";
import Apple from "../../../public/Img/applecolor.png";
import Mail from "../../../public/Img/mailcolor.png";
import Footer from "./Footer";

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow flex flex-col justify-center items-center bg-[#F6F6F6] min-h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md" style={{ marginTop: '10vh', width: '500px', maxWidth: '90%' }}>
          <div className="mb-4 w-full px-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="border border-orange-500 rounded p-2 w-full" required placeholder="Enter your email address"/>
          </div>
          <div className="mb-4 w-full px-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="border border-orange-500 rounded p-2 w-full" required placeholder="Enter your password"/>
          </div>
          <button type="submit" className="text-white bg-orange-500 px-4 py-2 rounded w-full hover:bg-orange-600 transition-colors">Continue</button>

          <div className="my-5 w-full">
            <div className="relative">
              <hr className="border-t border-gray-400" />
              <span className="absolute text-gray-400 bg-white px-4 py-2 rounded-2xl -translate-y-1/2 left-1/2 -translate-x-1/2">
                or continue with
              </span>
            </div>

            <div className="mt-10 flex justify-center gap-10">
              <img src={Facebook} className="border border-slate-400 rounded-xl p-1 cursor-pointer" style={{ width: '70px', height: '70px' }} />
              <img src={Apple} className="border border-slate-400 rounded-xl p-1 cursor-pointer" style={{ width: '70px', height: '70px' }}/>
              <img src={Google} className="border border-slate-400 rounded-xl p-1 cursor-pointer" style={{ width: '70px', height: '70px' }}/>
              <img src={Mail} className="border border-slate-400 rounded-xl p-1 cursor-pointer" style={{ width: '70px', height: '70px' }}/>    
            </div>
          </div>

          <div className="w-full text-center p-4">
            <hr className="border-t border-gray-400" />
            <p onClick={toggleModal} className="inline-block align-middle">
              By signing in or creating an account, you agree with our <span className="text-[#C85100]" >Terms & conditions</span> and <span className="text-[#C85100]">Privacy policy</span>
            </p>
          </div>
        </form>
      </div>

      {modal && (
        <div className="bg-black bg-opacity-50 flex justify-center items-center" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>       
           <div className="bg-white p-5 rounded-lg shadow-lg" style={{ width: '600px', maxWidth: '90%' }}>
            <h2 className="text-xl font-semibold mb-4">Hello Modal</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors" onClick={toggleModal}>
              I AGREE
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
