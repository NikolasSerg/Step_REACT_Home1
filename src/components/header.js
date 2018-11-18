import React from 'react';
import NavItem from './header/navItem.js';


class Nav extends React.Component{
	state = {
        nav: [
            {id:1, name: "HOME", srcItem: "#home"},
            {id:2, name: "ABOUT", srcItem: "#about"},
            {id:3, name: "CONTACTS", srcItem: "#contacts"},
            {id:4, name: "HIM", srcItem: "#him"}
        ]
    };

	render(){
		return(
			<ul>
				{this.state.nav.map((iterator) => {
							return (
								<NavItem key = {iterator.name+iterator.id} name = {iterator.name} srcItem  = {iterator.srcItem}/>
							)
						}
					)
				}
			</ul>
		)
	}
}

export default Nav;