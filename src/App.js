import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About/AboutUs';
import ContactUs from './Components/Contact/ContactUs';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/contact_us' element={<ContactUs/>}></Route>
        <Route path='/Service' element={<Services/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
