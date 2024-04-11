import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "../src/components/Registration/SignIn";
import SignUp from "../src/components/Registration/SignUp";
import Navbar from './components/LandingPage/Header/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;