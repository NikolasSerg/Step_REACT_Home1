import React from 'react';

class Aside extends React.Component {

	render() {
		return (
			<div>
				<h2>{this.props.h2}</h2>
				<br/>
				<img src={this.props.img} alt="js"/>
				<br/>
				<p>{this.props.text}</p>

			</div>
		)
	}
}
export default Aside;