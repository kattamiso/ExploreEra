import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./components/Authentication/SignIn";
import SignUp from "../src/components/Authentication/SignUp";
import BookingPages from './components/BookingPages/BookingPages';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/bookingpages' element={<BookingPages/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;