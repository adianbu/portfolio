import React from 'react';
import "./Contact.css";
import {Avatar} from '@material-ui/core';

import linkedin from './icons/linkedin.png';
import facebook from './icons/facebook.png';
import insta from './icons/instagram.png';
import youtube from './icons/youtube.png';
import twitter from './icons/twitter.png';
import github from './icons/github.png';

function Contact() {
    return (
        <div className="contact" id="contact">
            <p className="contact_title">Contact</p>
            <div className="contact_social">
               <p className="contact_social_title">Social Media</p>
               
               <div className="contact_social_links">
               <a  className="contact_social_link" href="https://www.linkedin.com/in/adithya-anbu-11b3ab193/" rel="noreferrer" target="_blank">
                <Avatar
                 src={linkedin}
                 className="contact_social_avatar"
                />
               </a>  

               <a  className="contact_social_link" href="https://bit.ly/3gSkoCl" rel="noreferrer" target="_blank">
                <Avatar
                 src={facebook}
                />
               </a> 

               <a  className="contact_social_link" href="https://bit.ly/2Rd88l3" rel="noreferrer" target="_blank">
                <Avatar
                 src={insta}
                />
               </a> 

               <a  className="contact_social_link" href=" https://bit.ly/3siZIWn" rel="noreferrer" target="_blank">
                <Avatar
                 src={youtube}
                />
               </a> 

               <a  className="contact_social_link" href="https://bit.ly/3gWGd3y" rel="noreferrer" target="_blank">
                <Avatar
                 src={twitter}
                />
               </a> 

               <a  className="contact_social_link" href="https://bit.ly/3aXOlgn" rel="noreferrer" target="_blank">
                <Avatar
                 src={github}
                />
               </a> 

               </div>
                            
            </div>            
        </div>
    )
}

export default Contact
