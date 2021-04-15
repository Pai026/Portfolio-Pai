import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Abhiram from "./assets/pdfs/Abhiram.pdf";
import Certificate from "./assets/pdfs/Certificates.pdf";
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./contents/Home"));
const About = lazy(() => import("./contents/About"));
const Education = lazy(() => import("./contents/Education"));
const Skills = lazy(() => import("./contents/Skill"));
const Contact = lazy(() => import("./contents/Contact"));
const Resume = lazy(() => import("./contents/Resume"));
const Footer = lazy(() => import("./components/Footer"));
const renderLoader = () => (
    <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <span
            className="text-blue-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
            style={{ top: "50%" }}>
            <i className="fas fa-circle-notch fa-spin fa-5x"></i>
        </span>
    </div>
);

function App() {
    return (
        <Suspense fallback={renderLoader()}>
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
                    <Route path="/certificates">
                        <Resume pdf={Certificate} />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/resume">
                        <Resume pdf={Abhiram} />
                    </Route>
                    <Footer />
                </div>
            </Router>
        </Suspense>
    );
}

export default App;
