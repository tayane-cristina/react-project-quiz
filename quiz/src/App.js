import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import {useState, useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';

//COMPONENTS
import Navbar from './components/Navbar';

//PAGES
import Home from './pages/navbarPages/home/Home';
import About from './pages/navbarPages/about/About';
import Register from './pages/navbarPages/register/Register';
import SignIn from './pages/navbarPages/signin/SignIn';
import Category from './pages/categoriesPages/category/Category';
import CreateQuiz from './pages/categoriesPages/createQuiz/CreateQuiz';

//PAGES OF THE CATEGORY OPTIONS
import Art from './pages/categoriesPages/category/categoryOptions/art/Art'
import Entertainment from './pages/categoriesPages/category/categoryOptions/entertainment/Entertainment';
import History from './pages/categoriesPages/category/categoryOptions/history/History'
import Program from './pages/categoriesPages/category/categoryOptions/program/Program';
import Science from './pages/categoriesPages/category/categoryOptions/science/Science'
import Sport from './pages/categoriesPages/category/categoryOptions/sport/Sport'

import { AuthProvider } from './context/AuthContext';
import { useAuthenticator } from './hooks/useAuthentication';


function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthenticator()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      console.log(user)
    })
  }, [auth]);

  return (
    <div className="App">
      <AuthProvider value={{user}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/register' element={!user ? <Register /> : <Home />}></Route>
          <Route path='/signin' element={!user ? <SignIn /> : <Home />}></Route>
          <Route path='/category' element={!user ? <Register /> : <Category />}></Route>
          <Route path='/createQuiz' element={!user ? <Register /> : <CreateQuiz />}></Route>
          <Route path='/program' element={!user ? <Register /> : <Program />}></Route>

          {/*ROUTES TO CATEGORY OPTIONS*/}
          <Route path='/entertainment' element={!user ? <Register /> : <Entertainment />}></Route>
          <Route path='/art' element={!user ? <Register /> : <Art />}></Route>
          <Route path='/sport' element={!user ? <Register /> : <Sport />}></Route>
          <Route path='/history' element={!user ? <Register /> : <History />}></Route>
          <Route path='/science' element={!user ? <Register /> : <Science />}></Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
