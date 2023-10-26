import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

//COMPONENTS
import Navbar from './components/Navbar';

//PAGES
import Categories from './pages/Categories';
import CreateAQuiz from './pages/CreateAQuiz';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/createaquiz' element={<CreateAQuiz />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
