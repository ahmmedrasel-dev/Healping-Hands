import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Donation from './Pages/Donation/Donation';
import Event from './Pages/Event/Event';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/LoginRegister/Login';
import Register from './Pages/LoginRegister/Register';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/donation' element={<Donation></Donation>}></Route>
        <Route path='/events' element={<Event></Event>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
