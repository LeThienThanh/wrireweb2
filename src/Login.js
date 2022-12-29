import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';

const Login = () => {
  const navigate = useNavigate();
    const username = useRef(null);
    const password = useRef(null);


  const check = () =>
  { 
        switch (username.current.value) {
            case 'admin':
                localStorage.setItem('username',username.current.value);
                localStorage.setItem('password',password.current.value);
                localStorage.setItem('role','admin');
                localStorage.setItem('login', true);
                break;
            case 'editor':
                localStorage.setItem('username',username.current.value);
                localStorage.setItem('password',password.current.value);
                localStorage.setItem('role','editor');
                localStorage.setItem('login', true);
                break;
            case 'author':
                localStorage.setItem('username',username.current.value);
                localStorage.setItem('password',password.current.value);
                localStorage.setItem('role','author');
                localStorage.setItem('login', true);
                break;
            default:
                break;
        }
  };
  return (
    <div className='w-full min-h-screen flex h-full bg-[#ffffff] items-center'>
            <div className='flex-col items-center mx-[600px] text-center'>
                <input type="text" placeholder="username" id='username' className='my-[5px]' ref={username}/>
                <input type="password" placeholder="password" id='password' className='my-[5px]' ref={password}/>

                <div onClick={check} className='bg-gray-500'>Login</div>
            </div>
            
    </div>
  )
}

export default Login