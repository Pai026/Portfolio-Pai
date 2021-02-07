import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navitem extends Component {
render() {
return (
<button className="bg-none hover:bg-none text-gray-800 font-semibold py-2 px-4 border-none" id={this.props.item}>
<Link to={this.props.tolink} onClick={this.props.activec.bind(this,this.props.item)}>{this.props.item}</Link>
</button>
)
}
}
export default Navitem