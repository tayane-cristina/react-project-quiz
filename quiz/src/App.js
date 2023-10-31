import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

//COMPONENTS
import Navbar from './components/Navbar';

//PAGES
import Categories from './pages/Categories';
import Home from './pages/Home';

//CATEGORIES PAGES
import Entertainment from './pages/categoriesPage/ Entertainment';
import Art from './pages/categoriesPage/Art';
import History from './pages/categoriesPage/History';
import Program from './pages/categoriesPage/Program';
import Sciences from './pages/categoriesPage/Sciences';
import CreateAQuiz from './pages/CreateAQuiz';
import Sports from './pages/categoriesPage/Sports';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/createaquiz' element={<CreateAQuiz />} />
          <Route path='/entertainment' element={<Entertainment />}/>
          <Route path='/art' element={<Art />}/>
          <Route path='/history' element={<History />}/>
          <Route path='/Sciences' element={<Sciences />}/>
          <Route path='/program' element={<Program />}/>
          <Route path='/sports' element={<Sports />}/>
          
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
