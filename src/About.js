import React from 'react';
import "./About.css";
import {Avatar} from "@material-ui/core";

import random from './icons/github.png';


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
                  <Avatar src={"https://picsum.photos/"} className="about_avatar" />
                </div>
                <div className="about_right_divider">

                </div>
                <div className="about_right_content">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
            </div>

            </div>

            

            
           
        </div>
    )
}

export default About
