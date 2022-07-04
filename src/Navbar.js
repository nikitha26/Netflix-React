import React, {useState,useEffect } from 'react'
import './nav.css';

function Navbar() {
  const [show, handleShow] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
      });
    
      return () => {
        window.removeEventListener("scroll",null);
      };
    }, []);
    
  return (
    <div className={`nav ${show && "nav_black"}`}>
       <img
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='nav_logo'
       />
       {/* <img
        className='nav_avatar'
        src='http://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png'
        alt='avatar_logo'
       /> */}
    </div>
  )
}

export default Navbar