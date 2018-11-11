    import React from 'react';
    import Aside from "../aside";
    // const ASIDE = <Aside />;

class ContentItem extends React.Component {

    render(){
        return(
            <article>
                <h2>{this.props.h2}</h2>
                <p>{this.props.text}</p>
                <div>{this.props.date}</div>
                <button onClick = {this.handlerClick}>click</button>
            </article>
        )
    }
    handlerClick = () => {
        console.log("it's work");
        // ASIDE.setState({messege: 'Hello world'})
                {/*<Aside messege = 'mmmmmm' />*/}

    }
}

export default ContentItem;