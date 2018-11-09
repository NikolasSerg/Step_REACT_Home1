import React from 'react';
import NavItem from './header/NavItem.js';


class Nav extends React.Component{
	state = {
		nav: [
			{nav1: "HOME"},
			{nav2: "ABOUT"},
			{nav3: "CONTACTS"},
			{nav4: "HIM"}
		]
	};
	render(){
		return(
			<ul>
				{this.state.nav.map((iterator) => {
							return (
								<NavItem/>
							)
						}
					)
				}
			</ul>
		)
	}
}

export default Nav;