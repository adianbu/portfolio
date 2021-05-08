import React from 'react';
import "./About.css";
import {Avatar} from "@material-ui/core";

import random from './icons/github.png';
import vk from './images/vk.png';

function About() {
    return (
        <div className="about" id="about">
            <p className="about_title">About</p>

            <div className="about_center">

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

            <div className="about_right">
                <div className="about_avatar_div">
                  <Avatar src={vk} className="about_avatar" />
                </div>
                <div className="about_right_divider">

                </div>
                <div className="about_right_content">
                    <p>
                    Hi, I'm Adithya Anbu. I am a full stack WEB and APP developer. 
                    I have worked on quite a few projects and I would love to work on yours. 
                    For more information you can <span> <a href="#contact" style={{textDecoration:"none",color:"#e6276d" }}>contact me </a></span>here. 
                    </p>
                </div>
            </div>

            </div>

            

            
           
        </div>
    )
}

export default About
