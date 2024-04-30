import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import Categories from "./Pages/Categories"

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
     <Header />   
    <Footer />
    </div>
  );
}

export default App;