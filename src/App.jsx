import './App.css';
import 'tailwindcss/tailwind.css';
import logo from './Static/images/sample.svg';
import Header from './Pages/HomePage/Header';
import Guest from './Pages/HomePage/Guest';
import Footer from './Pages/HomePage/Footer';
import About from './Pages/HomePage/About';

function App() {
  return (
    <div className="app">
      <Header />
      <About/>
      <Guest />
      <Footer/>
    </div>
  );
}

export default App;
