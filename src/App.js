import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Random from "./Random";
import Random2 from "./Random2";
import Random3 from "./Random3";
import Random4 from "./Random4";
import Random5 from "./Random5";

function App() {
  return (
    <Router>
    <div className="App">  

      <Switch>
      <Route path="/fff">
        <Random/>
        </Route>

        <Route path="/fffg">
        <Random2/>
        </Route>

        <Route path="/fffo">
        <Random3/>
        </Route>

        <Route path="/fff4">
        <Random4/>
        </Route>

        <Route path="/fff5">
        <Random5/>
        </Route>

       <Route path="/about">
        <About/>
        </Route>

        <Route path="/">
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
        </Route>
        
        
      </Switch>
      
    </div>
    </Router> 
  );
}

export default App;
