import logo from "./logo.svg";
import "./App.css";

import User from "./components/Header/User";
import Slider from "./components/Header/Slider";
import ContentPage from './components/Schedules/ContentPage';
import Footer from "./components/Footer/Footer";
import ShowingMovies from "./components/ShowingMovies/ShowingMovies";

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
      <Layout>
        <Discount/>
      </Layout>
    </>
  );
}

export default App;
