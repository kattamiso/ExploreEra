import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "../../components/LandingPage/Footer/Footer";
import Facebook from "../../../public/Img/fbcolor.png";
import Google from "../../../public/Img/googlecolor.png";
import Apple from "../../../public/Img/applecolor.png";
import Mail from "../../../public/Img/mailcolor.png";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebase-config'

export function Modal({ handleClose }) { 

  return (
    <div className="absolute mx-auto flex justify-center z-10 w-full bg-slate-400 inset-0 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>

      <div className="flex items-center justify-center max-w-[500px]">
        <div className="relative bg-white rounded-xl p-8">
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
          <p className="text-gray-700">
          Before you use our website or services, please carefully read the following Terms and Conditions. By accessing or using our platform, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please do not use our services. Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose information about you. By using our services, you consent to our privacy practices.
           </p>

           <h2 className="text-2xl font-semibold mb-4"> Privacy policy </h2>
           <p className="text-gray-700">We may collect personal information, such as your name, email address, and other details, when you register an account, make a purchase, or interact with our services. We also automatically collect certain information, such as IP addresses, browser type, and usage patterns, through cookies and similar technologies. Our website may contain links to third-party websites or services.</p>
       
            <button onClick={handleClose} className="text-white bg-orange-500 px-4 py-2 rounded w-[200px] hover:bg-orange-600">i Agree </button>

        </div>

      </div>
    </div>
  );
}

const SignIn = () => {
  const [showModal, setShowModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#F6F6F6]">
      <Header />
      <h4> User Logged In: {user?.email} </h4>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col items-center justify-center mt-[150px] w-[500px] h-[500px] bg-white"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-orange-500 rounded px-4 p-2 w-[400px]"
            required
            placeholder="Enter your email address"
            value={loginEmail}
            onChange={(event) => setLoginEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-orange-500 rounded px-4 p-2 w-[400px]"
            required
            placeholder="Enter your password"
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-orange-500 px-4 py-2 rounded w-[400px] hover:bg-orange-600"
        >
          Continue
        </button>
  
        <div className="my-5 flex flex-col items-center">
          <div className="relative w-[400px]">
            <hr className="border-t border-gray-400" />
            <span className="absolute text-gray-400 bg-white px-4 py-2 rounded-2xl -translate-y-1/2 left-1/2 -translate-x-1/2">
              or continue with
            </span>
          </div>
  
          <div className="mt-10 flex flex-row w-[400px] gap-10">
            <img className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer" src={Facebook} />
            <img src={Apple} className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer" />
            <img src={Google} className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer" />
            <img src={Mail} className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer" />
          </div>
        </div>
  
        <div className="relative w-[400px]">
          <hr className="border-t border-gray-400" />
          <p>
            By signing in or creating an account, you agree with our{" "}
            <span className="ml-12 text-orange-700" onClick={toggleModal}>
              Terms & conditions and Privacy policy
            </span>
          </p>
        </div>
      </form>
  
      {showModal && <Modal handleClose={toggleModal} />}
  
      <Footer />
    </div>
  );
}
  

export default SignIn;
