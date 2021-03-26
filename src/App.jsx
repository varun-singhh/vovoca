import './App.css';
import "tailwindcss/tailwind.css"
import logo from "./Static/images/sample.svg";
import Header from './Pages/HomePage/Header';
import Guest from './Pages/HomePage/Guest';
function App() {
  return (
    <div className="app">
      <Header/>
      <Guest/>
    </div>
  );
}

export default App;
