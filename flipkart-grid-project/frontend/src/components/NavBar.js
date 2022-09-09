import React from 'react'
import './NavBar.css'
import {FaRegUserCircle} from 'react-icons/fa';




function NavBar() {
  return (
    <div>
        <nav>
            <h1 class="logo"><span class="logo-span">NFT </span>MARKETPLACE</h1>

            <div class="other-links">
                
                <h3 class="active">Home</h3>
                <h3>Explore</h3>
                <h3>About US</h3>

            </div>

            <FaRegUserCircle class="user-icon"/>

        </nav>
    </div>
  )
}

export default NavBar