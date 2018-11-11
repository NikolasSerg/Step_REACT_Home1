import React from 'react';
import NavItem from './header/navItem.js';


class Nav extends React.Component{
	state = {
        nav: [
            {name: "HOME", srcItem: "#home"},
            {name: "ABOUT", srcItem: "#about"},
            {name: "CONTACTS", srcItem: "#contacts"},
            {name: "HIM", srcItem: "#him"}
        ]
    };

	render(){
		return(
			<ul>
				{this.state.nav.map((iterator) => {
							return (
								<NavItem name = {iterator.name} srcItem  = {iterator.srcItem}/>
							)
						}
					)
				}
			</ul>
		)
	}
}

export default Nav;