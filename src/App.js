import "./App.css";
import{Routes,Route} from "react-router-dom"
import HomePage from "./components/pages/HomePage";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import { ErrorFour as NotFound } from './components/NotFound/NotFound';
import CreatePortfolioPage from "./components/pages/Create-Portfolio";
import Portfolio from "./components/pages/Portfolio";
import AboutPage from "./components/pages/About.jsx";

function App(){

  return (
   <div>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/create-portfolio" element={<CreatePortfolioPage/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/about" element={<AboutPage/>} />
    </Routes>
   </div>
  );
}

export default App;
