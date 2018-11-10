    import React from 'react';

class ContentItem extends React.Component {
    render(){
        return(
            <section>
                <h2>{this.props.h2}</h2>
                <p>{this.props.text}</p>
                <div>{this.props.date}</div>
            </section>
        )
    }
}

export default ContentItem;