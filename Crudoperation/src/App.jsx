import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';
import AddUser from './CreateUser';
import UpdateUser from './UpdateUser';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User/>}></Route>
      <Route path='/create' element={<AddUser/>}></Route>
      <Route path='/update/:id' element={<UpdateUser/>}></Route>

    </Routes>
    </BrowserRouter>
    

    </>
  )
}

export default App
