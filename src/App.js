import logo from "./logo.svg";
import "./App.css";

import User from "./components/Header/User";
import Slider from "./components/Header/Slider";
import ContentPage from './components/Schedules/ContentPage';
import Footer from "./components/Footer/Footer";
import ShowingMovies from "./components/ShowingMovies/ShowingMovies";

function App() {
  return (
    <>
      {/* <Header /> */}
      <User />
      <Slider />
      <ShowingMovies />
      <ContentPage />
      <Footer />
    </>



  );
}

export default App;
