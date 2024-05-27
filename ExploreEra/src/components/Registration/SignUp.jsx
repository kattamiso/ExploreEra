import { useState } from "react";
import Header from "./Header";
import Footer from "../../components/LandingPage/Footer/Footer";
import Facebook from "../../../public/Img/fbcolor.png";
import Google from "../../../public/Img/googlecolor.png";
import Apple from "../../../public/Img/applecolor.png";
import Mail from "../../../public/Img/mailcolor.png";
import { Modal } from "./SignIn";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    navigate(link);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(userCredential.user);
      navigate('/');

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#F6F6F6]">
      <Header />
      <form onSubmit={handleSubmit} className="relative flex flex-col items-center justify-center mt-[150px] w-[500px] h-[700px] bg-white">
        <h1>User Logged in:</h1>
        {user?.email}
        <button>Sign Out</button>
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input type="text" id="email1" name="email" className="border border-orange-500 rounded px-4 p-2 w-[400px]" placeholder="Enter your first name"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input type="text" id="email2" name="email2" className="border border-orange-500 rounded px-4 p-2 w-[400px]" placeholder="Enter your last name"/>
        </div>
        <div className="mb-4">
          <label htmlFor="email3" className="block text-gray-700">Email</label>
          <input onChange={(event) => {setRegisterEmail(event.target.value)}} type="email" id="email" name="email" className="border border-orange-500 rounded px-4 p-2 w-[400px]" required  placeholder="Enter your email address"/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input onChange={(event) => {setRegisterPassword(event.target.value)}} type="password" id="password" name="password" className="border border-orange-500 rounded px-4 p-2 w-[400px]" required placeholder="Enter your password"/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Confirm the Password</label>
          <input type="password" id="password1" name="password" className="border border-orange-500 rounded px-4 p-2 w-[400px]" required placeholder="Re-Enter your password"/>
        </div>
        <button type="submit" onClick={() => { register(); handleNavigation('/newhomepage'); }} className="text-white bg-orange-500 px-4 py-2 rounded w-[400px] hover:bg-orange-600">Continue</button>
        <div className="my-5 flex flex-col items-center">
          <div className="relative w-[400px]">
            <hr className="border-t border-gray-400" />
            <span className="absolute text-gray-400 bg-white px-4 py-2 rounded-2xl -translate-y-1/2 left-1/2 -translate-x-1/2">
              or continue with
            </span>
          </div>
          <div className="mt-10 flex flex-row w-[400px] gap-10">
            <img className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer" src={Facebook} alt="Facebook"/>
            <img src={Apple} className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer" alt="Apple"/>
            <img src={Google} className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer" alt="Google"/>
            <img src={Mail} className="border border-slate-400 rounded-xl p-1 w-[70px] h-[70px] cursor-pointer" alt="Mail"/>
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
};

export default SignUp;
