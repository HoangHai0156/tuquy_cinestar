import logo from "./logo.svg";
import "./App.css";

import User from "./components/Header/User";
import Slider from "./components/Header/Slider";
import ContentPage from './components/Schedules/ContentPage';
import Footer from "./components/Footer/Footer";
import ShowingMovies from "./components/ShowingMovies/ShowingMovies";
import Contact from "./components/Contact/Contact";
import Schedules from "./components/Schedules/Schedules";
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Schedules />
      {/* <Header />
      <User />
      <Slider />
      <ShowingMovies /> */}
      <ContentPage />
      {/* <Footer /> 
      <Contact /> */}
    </>



  );
}

export default App;
