import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
import SchedulesPage from './pages/SchedulesPage';
import TheaterPricePage from './pages/TheaterPricePage';
import OffersPage from './pages/OffersPage';
import QnAPage from './pages/QnAPage';
import IntroductionPage from './pages/IntroductionPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout/Layout';
import Order from './components/Order/Order';

function App() {
    return (
        <>
            {/* <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/phim" element={<Films />} />
                    <Route path="/lichchieu" element={<SchedulesPage />} />
                    <Route path="/rapvagia" element={<TheaterPricePage />} />
                    <Route path="/khuyenmai" element={<OffersPage />} />
                    <Route path="/hoivadap" element={<QnAPage />} />
                    <Route path="/gioithieu" element={<IntroductionPage />} />
                    <Route path="/lienhe" element={<ContactPage />} />
                </Routes>
            </Layout> */}
            <Order />
        </>
    );
}

export default App;
