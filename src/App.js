
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Mission from './pages/mission';
import Search from './pages/search';
import Login from './pages/login';
import Contact from './pages/contact';
import Signup from './pages/signup';
import Footer from './components/footer';
import Enquiry from './components/enquiry'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='mission' element={<Mission />}/>
          <Route path='search' element={<Search />}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Routes>
        <Enquiry />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
