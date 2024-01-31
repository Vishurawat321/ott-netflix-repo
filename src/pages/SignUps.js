import React from 'react'
import './SignUps.css'
import { useNavigate } from 'react-router-dom';

function SignUps() {
    const navigate = useNavigate();
    // const emailref = useRef(null);
    // const passref = useRef(null);


    const register=(i)=>{
        navigate('/homescreen');
        return false;
       
    };
    const signIn=(e)=>{
        navigate('/homescreen');
        return false;
    };
  return (
    <div className='signups'>
        <form onSubmit={signIn}>
            <h1>Sign In</h1>
            <input  placeholder='Email' type='email'/>
            <input  placeholder='Password' type='password'/>
            <button type="submit" >Sign In</button>
            <h4><span className='signups_grey'>New to Netflix?</span><span className='signups_sign' onClick={register}> Sign Up now.</span></h4>
        </form>
    </div>
  )     
}

export default SignUps