import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import DetailPage from './pages/DetailPage/DetailPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/style.css';
import './styles/responsive.css';
import { useEffect } from 'react';
import Stars from './pages/Stars/Stars';
import Comments from './pages/Comments/Comments';
// import logo from './logo.svg';

function App() {
  useEffect(() => {
    window.location.hash = '';
  }, [window.pageYOffset]);
  return (
    <div className='star-store'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/stars' element={<Stars />} />
        <Route exact path='/reviews' element={<Comments />} />
        <Route exact path='/catalog/detailPage' element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
