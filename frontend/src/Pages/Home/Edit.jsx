import React from 'react'
import Notify from '../../components/Notify/Notify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Edit = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        DOB: ''
      });
    const {id} = useParams(); 
      useEffect(() => {
        const fetchUser = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/user/${id}`);
            setUserData(response.data.data.user);
            console.log(userData);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
        };

    fetchUser();
     }, [id]);


    const formik = useFormik({
        initialValues: {
            name: userData.name,
            email: userData.email,
            password: '',
            DOB: userData.DOB
          },
          enableReinitialize:true,
        validationSchema: Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required'),
          DOB: Yup.date()
            .required('Required')
        }),
        onSubmit: async (values) => {
          try {
            await axios.put(`http://127.0.0.1:8000/api/user/update/${id}`, values);
            // Handle successful submission
            Notify.success('User Update Successfully');
          } catch (error) {
            // Handle error
            Notify.error('User Not Update');
          }
        },
      });
    
      return (
        <div className='container'>
          <h3 className='py-3 mt-3'>
            Update User
          </h3>
          <form onSubmit={formik.handleSubmit}>
            <div className='row'>
              <div className="mb-3 col-lg-12">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  placeholder="Enter Name"
                  name='name'
                  aria-describedby="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                ) : null}
              </div>
    
              <div className="mb-3 col-lg-4">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  aria-describedby="emailHelp"
                  name='email'
                  placeholder='Enter Email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>
    
              <div className="mb-3 col-lg-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  aria-describedby="password"
                  name='password'
                  placeholder='Enter Password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="invalid-feedback">{formik.errors.password}</div>
                ) : null}
              </div>
    
              <div className="mb-3 col-lg-4">
                <label htmlFor="DOB" className="form-label">Date Of Birth</label>
                <input
                  type='date'
                  className={`form-control ${formik.touched.DOB && formik.errors.DOB ? 'is-invalid' : ''}`}
                  id="DOB"
                  aria-describedby="DOB"
                  name='DOB'
                  value={formik.values.DOB}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.DOB && formik.errors.DOB ? (
                  <div className="invalid-feedback">{formik.errors.DOB}</div>
                ) : null}
              </div>
    
              <div className='d-flex justify-content-center col-lg-12 mt-3'>
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <button type="reset" className="btn btn-danger ms-2" onClick={formik.handleReset}>Reset</button>
              </div>
            </div>
          </form>
        </div>
      )
}
