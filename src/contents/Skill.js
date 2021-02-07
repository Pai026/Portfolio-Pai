import React, { Component } from "react";
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myskills: [
                "C",
                "C++",
                "PYTHON",
                "JAVA SCRIPT",
                "NESTJS",
                "XAMARIN",
                "PHP",
            ],
        };
    }
    render() {
        return (
            <div className="prose lg:prose-xl condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li key={value}>{value}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
export default Skills;
