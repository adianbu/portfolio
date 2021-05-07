import React from 'react';
import "./Projects.css";
import {Card , CardDeck} from "react-bootstrap";
import corona from "./images/corona.png";
import amazon from "./images/amazon.png";
import insta from "./images/insta.png";



function Projects() {
    return (
        <div className="projects" id="projects" >
            <p className="projects_title">Projects</p>
            
            {/* <a className="projects_link" href="https://corona-tracker-7c265.web.app/">Corona tracker</a> */}
            
            <CardDeck className="projects_classdeck">           
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
                          Built with : <span> React.js</span>
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer className="projects_card_footer">
                    <small className="text-muted">Fullstack</small>
                    </Card.Footer>
                </Card>   

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
                    Built with : <span>React.js</span> <span>Firebase</span> 
                        
                    </Card.Text>
                    </Card.Body>

                    <Card.Footer className="projects_card_footer">
                    <small className="text-muted">Fullstack</small>
                    </Card.Footer>
                </Card>

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
                    Built with : <span>React.js</span> <span>Firebase</span> 
                        
                    </Card.Text>
                    </Card.Body>

                    <Card.Footer className="projects_card_footer">
                    <small className="text-muted">Fullstack</small>
                    </Card.Footer>
                </Card>
            </CardDeck> 
        </div>
    )
}

export default Projects
