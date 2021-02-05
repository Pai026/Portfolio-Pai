import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../assets/images/Abhiram.jpg';
import Social from '../components/Social';
class Home extends Component {
render() {
return (
<div className="bg-gray-300  home">
<img src={profilepic} className="profilepic"></img>
<ReactTypingEffect className="typingeffect" text={['I am Abhiram R Pai','I am a Final Year B.Tech Student']} speed={100} eraseDelay={700}/>
<Social />
</div>
)
}
}
export default Home