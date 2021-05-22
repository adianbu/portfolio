import React from 'react';
import "./About.css";
import {Avatar} from "@material-ui/core";
import dp from './images/dp.jpg';

import ScrollAnimation  from 'react-animate-on-scroll'
import Fade from 'react-reveal/Fade';


function About() {
    return (
//         <ScrollAnimation animateIn="animate__backInUp" duration="0.5" 
//         style={{    transition: "all 1s cubic-bezier(0.075, 0.82, 0.165, 1)"
// }}>
        <div className="about" id="about">
        
        <Fade up >
        <p className="about_title">
       
        About
        
        </p>
        </Fade>
        
            <div className="about_center">

            <Fade left cascade>

            <div className="about_left">
                
                <p className="about_left_title">Skill sets</p>
                
              
                <div className="about_skillsets">      
                    <p className="about_skillsets_left">
                        Javascript<br/>
                        React.js<br/>
                        Node.js<br/>
                        MongoDB<br/>
                    </p> 

                    <p className="about_skillsets_right">
                        Flutter<br/>
                        Firebase<br/>
                        Express.js <br/>
                        SQL   <br/>
                        
                    </p>              
                </div>
                

            </div>
            </Fade>

            <Fade right cascade>
                <div className="about_right">
                    <div className="about_avatar_div">
                    <Avatar src={dp} variant="square" className="about_avatar" />
                    </div>
                    <div className="about_right_divider">

                    </div>
                    <div className="about_right_content">
                        <p>
                        Hi, I'm Adithya Anbu. I am a full stack WEB and APP developer. 
                        I have worked on quite a few projects and I would love to work on yours. 
                        For more information you can <span> <a id="about_right_link" href="#contact" style={{textDecoration:"none" }}>contact me </a></span>here. 
                        </p>
                    </div>
                </div>
            </Fade>

            

            </div>

            

            
           
        </div>
        // </ScrollAnimation>
    )
}

export default About
