import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../assets/images/Abhiram.jpg";
import Social from "../components/Social";
class Home extends Component {
    render() {
        return (
            <div className="bg-gray-300  home">
                <img
                    alt="profilePic"
                    src={profilepic}
                    className="profilepic"
                    width="200px"
                    height="30px"></img>
                <ReactTypingEffect
                    className="typingeffect"
                    text={[
                        "I am Abhiram R Pai",
                        "I am a Final Year B.Tech Student",
                        "At Muthoot Institute Of Technology and Science",
                    ]}
                    speed={100}
                    eraseDelay={700}
                />
                <Social />
            </div>
        );
    }
}
export default Home;
