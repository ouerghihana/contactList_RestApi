
import './App.css';

import ListContact from './components/contacts/ListContact';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Addcontact from './components/addcontact/Addcontact';
import UpdateContact from './components/updatecontact/UpdateContact';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (

    <div >
    <Routes> 
    <Route path='/' element={<Navbar/>} ></Route>
    <Route path='/home' element={<Homepage/>} ></Route>
    <Route path='/contact' element={<ListContact/>} ></Route>
    <Route path='/addcontact' element={<Addcontact/>} ></Route>
    <Route path='/update/:id' element={ <UpdateContact/>} ></Route>

    </Routes>
      
      
      
      
     
          </div>
  );
}

export default App;
