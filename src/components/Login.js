import React, {useState} from 'react'
import { ReactDOM } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
function Login() { 
  const navigate = useNavigate();
  const {register,handleSubmit,formState : {errors}} = useForm();
  const onFormSubmit = (userData) => {
    navigate('/home');
  }
  return (
    <div className = 'login mt-5'>
        <div className='login_form col-8 col-sm-6 col-md-3 mt-3 mx-auto'>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <h3 className = 'text-dark mx-auto'>LOGIN HERE</h3>
            {/*user name */}
            <div className='mb-3'>
              <label htmlFor = "un">User Name</label>
              <input type = 'text' id ="un" className='form-control' {...register("username",{required : true})}></input>
              {/*error message for username*/}
              {errors.username?.type === 'required' && <p className='text-danger'>*Username is required</p>}
            </div>
            {/*Email*/}
            <div className='mb-3'>
              <label htmlFor = "email">Email</label>
              <input type = 'email' id ="email" className='form-control' {...register("email",{required : true})}/>
              {/*error message for username*/}
              {errors.username?.type === 'required' && <p className='text-danger'>*Email is required</p>}
            </div>
            {/*password*/}
            <div className='mb-3'>
              <label htmlFor = "password">Password</label>
              <input type = 'password' id ="password" className='form-control' {...register("password",{required : true})}/>
              {/*error message for username*/}
               {errors.username?.type === 'required' && <p className='text-danger'>*Password is required</p>}
            </div>
            {/*login button*/}
            {/*navigating to home component */}
              <div className='text-center'>
                  <button className = 'bubbly-button btn' type ="submit">login</button>
              </div>
           </form>
           </div>
    </div>
  )
}

export default Login

