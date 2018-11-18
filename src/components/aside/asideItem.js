import React from 'react';

class AsideItem extends React.Component {
    render(){
        return(
            <article>
                <h2>{this.props.h2}</h2>
                <p>{this.props.p}</p>
                <p>{this.props.title}</p>
            </article>
        )
    }
}

export default AsideItem;