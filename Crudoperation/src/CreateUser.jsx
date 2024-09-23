import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './User.css'

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault(); 
    console.log('Submit button clicked');
    axios.post('http://localhost:3001/createUser', { name, email, age })
      .then((result) =>{ console.log(result)
      navigate('/')})
      .catch((err) => console.log(err));
  };

  return (
    <div className='container'>
      <div className='card'>
        <form onSubmit={submit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              className='form-control'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              placeholder='Enter Email'
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              placeholder='Enter Age'
              className='form-control'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
