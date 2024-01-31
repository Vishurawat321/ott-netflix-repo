import React, { useState } from 'react'
import './logins.css'
import SignUps from './SignUps';
import Connect from '../Connect.jsx'
function Logins() {
  const [signIn, setsignIN] = useState(false);
  return (
    <div className='logins'>
      <div className='logins_background'>
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className='logins_logo' alt='' />


         <Connect />
        <div className='logins_gradient' />
        <div className='logins_body'>
          {signIn ? (
            <SignUps />
          ) :

            <>
              <h1>Unlimited movies, TV shows and more</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className='logins_input'>
                <form>
                  <input type='email' placeholder='Email Address' />
                  <button className='logins_getsb' onClick={() => setsignIN(true)}>Get Started</button>
                </form>
              </div>
            </>
          }


        </div>
      </div>
    </div>
  )
}

export default Logins