import React from 'react'
import About from '../about/About'
import Home from '../Home/Home'
import Menubar from '../menubar/Menubar'
import Skill from '../skills/Skill'
import './app.css'
import Project from '../project/Project'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

    return (
        <Router>
            <div className='main'>
                <Menubar />
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/skills" element={<Skill/>}/>
                    <Route exact path="/projects" element={<Project/>}/>
                </Routes>
            </div>
        </Router>

    )

}

export default App