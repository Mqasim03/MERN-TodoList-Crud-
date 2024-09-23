import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './User.css'


function User() {
  const [user, setuser] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3001')
      .then(result => setuser(result.data))
      .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
      axios.delete('http://localhost:3001/deleteUSer/'+id)
      .then(res => {console.log(res)
      window.location.reload()})
      .catch(err => console.log(err))
    }
  return (
    <div className='container'>
      <div className='card'>
      
        <Link to="/create" className='btn btn-success'style={{ fontSize: '16px', width:'20%', padding:'10px', marginBottom:'10px' }}>Add +</Link>
       
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              user.map((user) => {
                return <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                  <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                  <button className='btn btn-danger m-2'
                  onClick={(e) => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User