import React from 'react';

class NavItem extends React.Component {
	render(){
		return(
		    <li>
				<a href={this.props.srcItem}>{this.props.name}</a>
            </li>
		)
	}
}

export default NavItem;