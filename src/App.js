import logo from "./logo.svg";
import "./App.css";

import User from "./components/Header/User";
import Slider from "./components/Header/Slider";
import ContentPage from './components/Schedules/ContentPage';
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./components/ShowingMovies/MovieDetail/MovieDetail";
import TheaterAndPrice from "./components/TheaterAndPrice/TheaterAndPrice";
import SlideShowMovies from "./components/ShowingMovies/SlideShow/SlideShowMovies";
import Header from "./components/Header/Header"
import NavBar from "./components/Dashboard/NavBar/NavBar";

import CartSection from "./components/Header/CartSection";
import Home from "./components/home";
import Layout from "./components/Layout/Layout";
import Schedules from "./components/Schedules/Schedules";
import MemberSlide from "./components/Discount/MemberSlide";
import PromotionList from "./components/Discount/PromotionList";
import CFriend from "./components/Discount/CFriend";
import Discount from "./components/Discount/Discount";


function App() {
  return (
    <>

      {/* <Header /> */}

      {/* <User />
      <Slider />

      <Routes>
				<Route path='/' element={<MovieDetail />} />
				<Route path='/phim' element={<MovieDetail />} />
				<Route path='/rap-va-gia' element={<TheaterAndPrice />} />

			
			</Routes>

      <Footer /> */}

      <NavBar />

    </>
  );
}

export default App;
