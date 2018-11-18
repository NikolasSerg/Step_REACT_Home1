import React from 'react';
import  './contentItem.css';


class ContentItem extends React.Component {
	state = {
		name: 'select'
	};
    render(){
    	// const val = this.props;
        return(
            <article onClick = {() => {this.props.handlerClick(this.props)}}>
                <h2>{this.props.h2}</h2>
                <br/>
                <div>
                    <img src={this.props.img} alt="js"/>
                    <p>{this.props.text}</p>
                </div>
                <div className="clearBoth"></div>
                <div className="row">
                    <div className="col-5">
                        <h6> {this.props.production} </h6>
                        <img src="https://css.labirint.ru/t/21990/tild3065-3861-4136-a131-646331366235__Piter.png" alt="piters"/>
                        {this.props.date}
                    </div>
                </div>

                <br/>
                <br/>
            </article>

        )
    }
}

export default ContentItem;