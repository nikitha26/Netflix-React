import React from 'react'
import './Home.css';
function Home() {
  return (
    <div >
        <header className='main'
            style={{
            backgroundSize:'cover',
            backgroundImage:`url(
                "https://assets.nflxext.com/ffe/siteui/vlv3/a1dc92ca-091d-4ca9-a05b-8cd44bbfce6a/f9368347-e982-4856-a5a4-396796381f28/RS-en-20191230-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            )`,
            backgroundPosition:'center center',  
            }}
        >
            <div className='imagediv'></div>
            <div className="area">
                <h1>Unlimited movies, TV <br/>shows, and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <div class="search">
                    <input type="text" class="box" placeholder="Email"/>
                    <span class="try">
                    Try 30 days free <i class="fas fa-chevron-right"></i>


                    </span>
                </div>
            </div>        
        </header>
    </div>
  )
}

export default Home