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
