import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

//COMPONENTS
import Navbar from './components/Navbar';

//PAGES
import Home from './pages/navbarPages/home/Home'
import About from './pages/navbarPages/about/About'
import Register from './pages/navbarPages/register/Register'
import SignIn from './pages/navbarPages/signin/SignIn'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
