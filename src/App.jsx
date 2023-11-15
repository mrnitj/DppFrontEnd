import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login} from './Pages/Login'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import DelivaryDetails from './Pages/DelivaryDetails';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/deliverydetails' element={<DelivaryDetails/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App