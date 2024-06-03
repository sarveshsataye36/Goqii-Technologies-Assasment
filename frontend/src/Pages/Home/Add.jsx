import React, { useState } from 'react'
import Notify from '../../components/Notify/Notify';

export const Add = () => {

  const [addData, setData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
  });

  const { name, email, password, dateOfBirth } = addData;

    // handling on change of input 
    const onDataChange  = e => { 
      setData({...addData, [e.target.name]: e.target.value}); 
    }

  // submitting the data 
  const onSubmit = e => {
    e.preventDefault();
    Notify.success('User Added Successfully');
  }


  return (
    <div className='container'>
      <h3 className='py-3 mt-3'>
        Add New User
      </h3>
      <form onSubmit={e => onSubmit(e)}>
      <div className='row'>
        <div className="mb-3 col-lg-12">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter Name"
            name='name'
            aria-describedby="name"
            value={name}
            onChange={e => onDataChange(e)}
          />
        </div>

        <div className="mb-3 col-lg-4">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
            name='email'
            placeholder='Enter Email'
            value={email}
            onChange={e => onDataChange(e)}

          />
        </div>

        <div className="mb-3 col-lg-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" aria-describedby="password"
            name='password'
            placeholder='Enter Password'
            value={password}
            onChange={e => onDataChange(e)}
          />
        </div>


        <div className="mb-3 col-lg-4">
          <label htmlFor="dateOfBirth" className="form-label">Date Of Birth</label>
          <input type='date' className="form-control" id="dateOfBirth" aria-describedby="dateOfBirth"
            name='dateOfBirth'
            value={dateOfBirth}
            onChange={e => onDataChange(e)}
          />
        </div>

        <div className='d-flex justify-content-center col-lg-12 mt-3'>
          <button type="submit" className="btn btn-primary me-2">Submit</button>
          <button type="reset" className="btn btn-danger ms-2">Reset</button>
        </div>
      </div>
    </form>
    </div>
  )
}
