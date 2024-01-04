
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer 
from './Components/Footer';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Project from './Pages/Project';
import PageNotFound from './Pages/PageNotFound';
import Auth from './Components/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

     

      <Routes>
        
        <Route path='/'  element={<Home/>}/>
        <Route path='/login'  element={<Auth/>}/>
        <Route path='/register'  element={<Auth register/>}/>
        <Route path='/dashboard'  element={<Dashboard/>}/>
        <Route path='/Projects'  element={<Project/>}/>
        <Route path='*'  element={<PageNotFound/>}/>
        
      </Routes>

      <Footer/>

      

     
    </div>
  );
}

export default App;
