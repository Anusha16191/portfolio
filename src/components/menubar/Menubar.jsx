import React from 'react'
import './menubar.css'
const Menubar = () =>{
    return(

        <nav>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <div className= 'contacts'>  
            <i className="fa-solid fa-envelope"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-github"></i>
           
            </div>
          
        </nav>
    )

}

export default Menubar
