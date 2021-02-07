import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Abhiram from "./assets/pdfs/Abhiram.pdf";
import Certificate from "./assets/pdfs/Certificates.pdf";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Education from "./contents/Education";
import Skills from "./contents/Skill";
import Contact from "./contents/Contact";
import Resume from "./contents/Resume";

function App() {
    return (
        <Router>
            <div className="App ">
                <Navbar />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/education">
                    <Education />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
                <Route path="/certificate">
                    <Resume pdf={Certificate} />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/resume">
                    <Resume pdf={Abhiram} />
                </Route>
            </div>
        </Router>
    );
}

export default App;
