import React from 'react'
import "./Home.css";
import { Link} from 'react-scroll'

import {Zoom } from 'react-reveal'


function Home() {
 
    return (
        <div className="home" id="home"> 
        
        <div className="home_header">
          <Link  className="home_header_link" smooth={true} to="home" duration={1000}>Home</Link>
          <Link className="home_header_link"  smooth={true}  to="about" duration={1000}>About</Link>
          <Link className="home_header_link"  smooth={true}  to="projects" duration={1000}>Projects</Link>
          <Link className="home_header_link"  smooth={true}   to="contact" duration={1000}>Contact</Link>
        </div> 

        <div className="home_template_animation">
        <Zoom bottom  className="home_template_animation">

            <p className="home_template">
                    Hi , I'm <span className="home_template_name">Adithya Anbu</span> <br/>
                    
                    I am a Full stack  <br/>

                
                    
                    developer
                </p>
        </Zoom>
        </div>   
        </div>
    )
}

export default Home;
