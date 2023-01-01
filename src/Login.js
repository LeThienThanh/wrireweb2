import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import { circle_logo } from './assets';
// import { circle_logo } from './assets';

// import circle_logo from './assets'

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
  const abf = 'circle_logo.png';

  return (
    <div className='w-full min-h-screen flex h-full bg-[#363740] items-center'>

            <div className='flex-col items-center mx-[600px] text-center bg-[#FCFDFE] w-[380px] h-[430px] rounded-lg py-[30px]'>

              <div className='flex justify-center my-[5px] mt-[30px]'>
                <img src={require('./assets/' + abf)} alt='logo' className='rounded-full w-[40px] h-[40px] border-[3px] border-[#3751FF]'/>
              </div>             
              <div className='text-[#A4A6B3] text-[19px] text-center'> WriReWeb</div>   

              <input type="text" placeholder="Username" id='username' className='mb-[8px] mt-[20px] border-[1px] rounded p-[3px] w-[215px]' ref={username}/>

              <input type="password" placeholder="Password" id='password' className='my-[10px] border-[1px] rounded p-[3px] w-[215px]' ref={password}/>

              <div className='flex justify-center my-[5px] mt-[30px]'>
                 <div onClick={check} className='bg-[#3751FF] w-[255px] h-[30px] rounded-lg p-[4px] text-center text-[#fff]'>Login</div>
              </div>
              
            </div>
            
    </div>
  )
}

export default Login