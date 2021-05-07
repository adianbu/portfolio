import React,{useEffect,useRef} from 'react'
import "./Home.css";


function Home() {
 
    return (
        <div className="home"> 
        {/* <div className="home_header">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
        </div>          */}
        
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
