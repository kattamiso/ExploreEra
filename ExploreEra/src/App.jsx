import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignIn from "../src/components/Registration/SignIn";
// import SignUp from "../src/components/Registration/SignUp";
import NewHomePage from './components/AuthorizedPages/NewHomePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} /> */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/newhomepage' element={<NewHomePage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;