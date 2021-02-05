import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navitem extends Component {
render() {
return (
<a className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none" id={this.props.item}>
<Link to={this.props.tolink} onClick={this.props.activec.bind(this,this.props.item)}>{this.props.item}</Link>
</a>
)
}
}
export default Navitem