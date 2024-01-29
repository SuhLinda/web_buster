import './App.css';
import Header from '../Header/Header.jsx';
import Benefit from '../Benefit/Benefit.jsx';
import Manufacturers from '../Manufacturers/Manufacturers.jsx';
import Work from '../Work/Work.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Benefit />
      <Manufacturers />
      <Work />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
