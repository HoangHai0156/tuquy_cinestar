import "./App.css";
// import User from "./components/Header/User";
// import Slider from "./components/Header/Slider";
// import ContentPage from './components/Schedules/ContentPage';
import Footer from "./components/Footer/Footer";
// import ShowingMovies from "./components/ShowingMovies/ShowingMovies";
// import Introduce from "./components/Introduce/Introduce";
import SliderSlick from "./components/Introduce/SliderSlick";
import SliderPlayingMovie from "./components/Introduce/SliderPlayingMovie";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <User /> */}
      {/* <Slider /> */}
      {/* <ShowingMovies /> */}
      {/* <ContentPage /> */}
      {/* <Introduce /> */}
      <SliderSlick />
      <SliderPlayingMovie />
      <Footer />
    </>
  );
}

export default App;
