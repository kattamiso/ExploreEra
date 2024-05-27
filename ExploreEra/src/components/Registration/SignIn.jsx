import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "../../components/LandingPage/Footer/Footer";
import Facebook from "../../../public/Img/fbcolor.png";
import Google from "../../../public/Img/googlecolor.png";
import Apple from "../../../public/Img/applecolor.png";
import Mail from "../../../public/Img/mailcolor.png";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import Modal from "./Modal"; // Importing Modal

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
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev); // Toggle the modal visibility
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#F6F6F6]">
      <Header />
      <h4>User Logged In: {user?.email}</h4>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col items-center justify-center mt-[150px] w-[500px] h-[500px] bg-white"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
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
          <label htmlFor="password" className="block text-gray-700">Password</label>
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
        <button type="submit" className="text-white bg-orange-500 px-4 py-2 rounded w-[400px] hover:bg-orange-600">
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
};

export default SignIn;
