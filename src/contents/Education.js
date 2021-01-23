import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="B.Tech Software Engineering" where="Muthoot Institute Of Technology and Science" from="July 2017" to="Present" percentage="88.55"/>
<Widecard title="12th" where="SBOA Public SR.SEC school" from="2015" to="2017" percentage="88"/>
<Widecard title="10th" where="SBOA Public SR.SEC school" from="2014" to="2015" percentage="85.5"/>
</div>
)
}
}
export default Education