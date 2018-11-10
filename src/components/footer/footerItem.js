import React from 'react';

class FooterItem extends React.Component {
    render(){
        return(
            <li>{this.props.text}</li>
        )
    }
}

export default FooterItem;