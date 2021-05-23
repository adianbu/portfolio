import React from 'react';
import "./Projects.css";
import {Card , CardDeck} from "react-bootstrap";

import corona from "./images/corona.png";
import amazon from "./images/amazon.png";
import insta from "./images/insta.png";

import Fade from 'react-reveal/Fade';

function Projects() {
    // var tech=["React"];
    // var footer=["React"];
    //  var title = "d";
    return (
        <div className="projects" id="projects" >
        <Fade up>
            <p className="projects_title">
            
            Projects
            
            
            </p>
            </Fade>
            
            {/* <a className="projects_link" href="https://corona-tracker-7c265.web.app/">Corona tracker</a> */}
            
            <CardDeck className="projects_classdeck">   
            {/* <ProjectCard src={corona} tech={tech} footer={footer} title={title}/>         */}

            <Fade bottom cascade>
                <Card className="projects_card">
                    <a href="https://corona-tracker-7c265.web.app/" target="_blank" rel="noreferrer">
                    <Card.Img variant="top" src={corona} width="300px" />
                    </a>
                        
                        <Card.Body>
                            <Card.Title className="projects_card_title" target="_blank" rel="noreferrer" >
                            <a className="projects_card_title_link" href="https://corona-tracker-7c265.web.app/" target="_blank" rel="noreferrer">
                            Corona Tracker
                        </a>
                            </Card.Title>
                            <Card.Text>
                            Built with : <span className="projects_card_skillsets"> React.js</span>
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer className="projects_card_footer">
                        <small className="text-muted">Frontend</small>
                        </Card.Footer>
                    </Card> 
            {/* </Fade>

            <Fade up> */}
                <Card className="projects_card" href="https://clone-9c7e8.web.app/">
                        <a href="https://clone-9c7e8.web.app/" target="_blank" rel="noreferrer">
                            <Card.Img variant="top" src={amazon} width="300px" />
                        </a>
                    
                        <Card.Body>
                        <Card.Title  className="projects_card_title">
                        <a className="projects_card_title_link" href="https://clone-9c7e8.web.app/" target="_blank" rel="noreferrer">
                        Amazon Clone
                        </a>
                        
                        </Card.Title>
                        <Card.Text>
                        Built with : <span className="projects_card_skillsets">React.js</span> <span className="projects_card_skillsets">Firebase</span> 
                            
                        </Card.Text>
                        </Card.Body>

                        <Card.Footer className="projects_card_footer">
                        <small className="text-muted">Fullstack</small>
                        </Card.Footer>
                    </Card>
            {/* </Fade>

            <Fade up> */}
                <Card className="projects_card" >
                        <a href="https://insta-clone-25d43.web.app/" target="_blank" rel="noreferrer">
                        <Card.Img variant="top" src={insta} width="300px" />
                        </a>
                        
                        <Card.Body>
                        <Card.Title  className="projects_card_title">
                        <a className="projects_card_title_link" href="https://insta-clone-25d43.web.app/" target="_blank" rel="noreferrer">
                        Instagram Clone
                        </a>
                        
                        </Card.Title>
                        <Card.Text >
                        Built with : <span className="projects_card_skillsets">React.js</span> <span className="projects_card_skillsets">Firebase</span> 
                            
                        </Card.Text>
                        </Card.Body>

                        <Card.Footer className="projects_card_footer">
                        <small className="text-muted">Fullstack</small>
                        </Card.Footer>
                    </Card>
            </Fade>
                  

                

            

            </CardDeck> 
        </div>
    )
}

export default Projects
