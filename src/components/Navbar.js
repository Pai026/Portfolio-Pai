import React, { Component } from "react";
import Navitem from "./Navitem";
import logo from "../assets/images/logo.ico";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavItemActive: "",
        };
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document
                .getElementById(this.state.NavItemActive)
                .classList.remove("bg-black");
        }
        this.setState({ NavItemActive: x }, () => {
            document
                .getElementById(this.state.NavItemActive)
                .classList.add("bg-black");
        });
    };

    toggleMenu = () => {
        const navToggle = document.getElementsByClassName("toggle");
        for (let i = 0; i < navToggle.length; i++) {
            navToggle.item(i).classList.toggle("hidden");
        }
    };
    render() {
        return (
            <nav className="sidebar flex flex-wrap items-center justify-between p-5">
                <img src={logo} alt="logo" width="60" height="50"/>
                <div className="flex md:hidden">
                    <button id="hamburger" onClick={this.toggleMenu}>
                        <img
                            alt=""
                            className="toggle block"
                            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                            width="40"
                            height="40"
                        />
                        <img
                            alt="menu hidden"
                            className="toggle hidden"
                            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                            width="40"
                            height="40"
                        />
                    </button>
                </div>
                <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
                    <Navitem
                        item="Home"
                        tolink="/"
                        activec={this.activeitem}></Navitem>
                    <Navitem
                        item="About"
                        tolink="/about"
                        activec={this.activeitem}></Navitem>
                    <Navitem
                        item="Education"
                        tolink="/education"
                        activec={this.activeitem}></Navitem>
                    <Navitem
                        item="Skills"
                        tolink="/skills"
                        activec={this.activeitem}></Navitem>
                    <Navitem
                        item="Certificates"
                        tolink="/certificate"
                        activec={this.activeitem}></Navitem>
                    <Navitem
                        item="Contact"
                        tolink="/contact"
                        activec={this.activeitem}></Navitem>
                    <Navitem
                        item="Resume"
                        tolink="/resume"
                        activec={this.activeitem}></Navitem>
                </div>
            </nav>
        );
    }
}

export default Navbar;
