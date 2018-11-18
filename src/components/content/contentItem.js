    import React from 'react';

class ContentItem extends React.Component {
	state = {
		name: 'select'
	};
    render(){
    	// const val = this.props;
        return(
            <article onClick = {() => {this.props.handlerClick(this.props)}}>
                <h2>{this.props.h2}</h2>
                <p>{this.props.text}</p>
                <div>{this.props.date}</div>
            </article>

        )
    }
}

export default ContentItem;