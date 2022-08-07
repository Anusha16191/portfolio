import React from 'react'
import './home.css'

const Home = () => {

    return (
        <div className='container'>
            <div className='details'>
                <h1>
                    Hi, I'm Anusha P S
                </h1>
                <p>Computer Science Engineering Student</p>

                <p style={{ fontSize: "24px", marginTop: "2%" }}>An aspiring Front End Web Developer with a hunger for industrial knowledge and experience, who is well
                    organized and encourages team work, punctuality and dedication .Also posses strong foundations in the
                    IT field.</p>

                <div className='contacts'>
                    <a href="mailto: abhijithjaideep176@gmail.com"><i className="fa-solid fa-envelope fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/anusha-p-s-610465190/"> <i className="fa-brands fa-linkedin fa-2x"></i></a>
                    <a href="https://github.com/Anusha16191">  <i className="fa-brands fa-github fa-2x" ></i></a>

                </div>

            </div>


        </div>
    )
}

export default Home