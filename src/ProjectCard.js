import React from 'react';
import {Card } from "react-bootstrap";
import './ProjectCard.css';


function ProjectCard(src,title,tech,footer) {
    return (
        <div>
        <Card className="projects_card">
                <a href="https://corona-tracker-7c265.web.app/" target="_blank" rel="noreferrer">
                <Card.Img variant="top" src={src} width="300px" />
                </a>
                    
                    <Card.Body>
                        <Card.Title className="projects_card_title" target="_blank" rel="noreferrer" >
                        <a className="projects_card_title_link" href="https://corona-tracker-7c265.web.app/" target="_blank" rel="noreferrer">
                        {title}
                    </a>
                        </Card.Title>
                        <Card.Text>
                          Built with : 
                          {/* {
                            tech.map((ele)=>(
                                <span> {ele}</span>
                    ))} */}
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer className="projects_card_footer">
                    {/* {footer.map((ele)=>(
                        <small className="text-muted">{ele}</small>
                    ))} */}
                    <small className="text-muted">Frontend</small>
                    </Card.Footer>
                </Card> 
            
        </div>
    )
}

export default ProjectCard
