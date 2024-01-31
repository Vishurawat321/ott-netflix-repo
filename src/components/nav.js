import React, { useEffect, useState } from 'react'
import './nav.css'

function Nav() {
const [show,handleshow] = useState(false);

const transitionNavbar=()=>{
    if(window.scrollY>100){
        handleshow(true);
    }
    else{
        handleshow(false);
    }
}

useEffect(()=>{
window.addEventListener("scroll",transitionNavbar);
return()=>window.removeEventListener("scroll",transitionNavbar)
},[])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>
        <img className='nav_logo' src='https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png' alt=''/>
        <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
        </div>
        

    </div>
  )
}

export default Nav