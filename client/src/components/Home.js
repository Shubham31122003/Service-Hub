import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
function Home() {
  
  return (
      <>
  <div className="main11" > 
  <body  >
    <div class="sign">
      <span class="fast-flicker">S</span>ervice<span class="flicker">H</span>ub
    </div>
    <div className="btn">
      <Link to="/registration" className="button b1">
             Service Provider Registration
          </Link>
          <Link to="/services" className="button b1">
            Select Service
          </Link>
      </div>
  </body>
  </div>
    </>
  )
}

export default Home
// rfce