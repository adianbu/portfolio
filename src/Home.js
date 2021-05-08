import React,{useEffect,useRef} from 'react'
import "./Home.css";


function Home() {
 
    return (
        <div className="home"> 
        
        <div className="home_header">
          <a className="home_header_link" href="/">Home</a>
          <a className="home_header_link" href="#about">About</a>
          <a className="home_header_link"  href="#projects">Projects</a>
          <a className="home_header_link"  href="#contact">Contact</a>
        </div>
            <p className="home_template">
                Hi , I'm <span className="home_template_name">Adithya Anbu</span> <br/>
                
                I am a Full stack  <br/>

               
                 
                developer
            </p>
        </div>
    )
}

export default Home;
