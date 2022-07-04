import React from 'react'
import './homenavbar.css';
import { Button } from "react-bootstrap";

function HomeNavbar() {
  return (
    <div>
        <div className='nav'>
            <img
                className='netflix-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='nav_logo'
            />
            {/* <Button variant="danger">Sign In</Button> */}
        </div>
    </div>
  )
}

export default HomeNavbar