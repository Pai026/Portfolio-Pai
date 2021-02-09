import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//const AvatarComponent = lazy(() => import('./AvatarComponent'));
const Abhiram = lazy(() => import("./assets/pdfs/Abhiram.pdf"));
const Certificate = lazy(() => import("./assets/pdfs/Certificates.pdf"));
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./contents/Home"));
const About = lazy(() => import("./contents/About"));
const Education = lazy(() => import("./contents/Education"));
const Skills = lazy(() => import("./contents/Skill"));
const Contact = lazy(() => import("./contents/Contact"));
const Resume = lazy(() => import("./contents/Resume"));
const Footer = lazy(() => import("./components/Footer"));
const renderLoader = () => <p>Loading</p>;

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
                    <Route path="/certificate">
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
