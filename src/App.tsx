import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BookingPage from './pages/bookingPage';
import Navbar from "./navBar.tsx";
import PortfolioPage from "./pages/portfolioPage.tsx";
import HomePage from "./pages/homePage.tsx";
import ContactPage from "./pages/contactPage.tsx";

function App() {
    return (
        <>
            <Navbar/>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/book" element={<BookingPage/>}/>
                    <Route path="/portfolio" element={<PortfolioPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;