import React from 'react'
import { Link } from 'react-router-dom'
import './menubar.css'
import pic from '../images/Anusha pic.jpg'
const Menubar = () => {
    return (

        <nav>
            <div className='photo'>
                <img src={pic} alt="my_profile_picture" />
            <h3>ANUSHA P S</h3>
            </div>
            <div className='items'>
                <li style={{borderTop:"2px solid gray"}}><Link to="/"><i class="fa-solid fa-house"></i> Home</Link></li>
                <li><Link to="/about"><i class="fa-solid fa-address-card"></i> About</Link></li>
                <li> <Link to="/skills"><i class="fa-solid fa-laptop-code"></i> Skills</Link></li>
                <li> <Link to="/projects"><i class="fa-solid fa-list-check"></i> Projects</Link></li>
                <li style={{borderBottom:"2px solid gray"}}>
                    <a href="./Anusha P S.pdf" download="Anusha P S.pdf" ><i class="fa-solid fa-download"></i> Resume</a>
                </li>
            </div>
            
        </nav>
    )

}

export default Menubar
