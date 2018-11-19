import React from 'react';
import './contentItem.css';


class ContentItem extends React.Component {
	state = {
		stock: false
	};
    render(){
    	// const stock = document.getElementById('stock');
        return(

            <article onClick = {() => {this.props.handlerClick(this.props)}}>
                <h2>{this.props.h2}</h2>
                <br/>
	            <div className="row">
		            <div className="col-2">
			            <label>
				            АКЦИЯ: <input ref="stock" type="checkbox" value="stock" onChange={this.stockHandler}/>
			            </label>
		            </div>
		            <div className="col-10">
			            <h5>{this.state.stock === true ? "АКЦИОННАЯ СКИДКА НА КНИГУ - 15%" : ""}</h5>
		            </div>
	            </div>
                <div>
                    <img src={this.props.img} alt="js"/>
                    {/*<p {stock.checked ? style="color: red" : style="color: blue"}>{this.props.text}</p>*/}
                    <p className={this.state.stock === true ? "stock" : ""}>{this.props.text}</p>
                </div>
                <div className="clearBoth"></div>
                <div className="row">
                    <div className="col-5">
                        <img src = {this.props.production} alt="js"/>
                        <div className="date">
	                        {this.props.date}
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
            </article>

        )
    }
	stockHandler = () => {
    	// this.state.stock === false ? this.setState({stock: true}) : this.setState({stock: false});
    	this.setState((this.state.stock === false) ? {stock: true} : {stock: false});

		console.log(this.state.stock);
	};
}


export default ContentItem;